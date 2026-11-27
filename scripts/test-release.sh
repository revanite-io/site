#!/usr/bin/env bash
# Boundary builds for the release rule: builds the site as of each release edge and asserts which
# Advent of Gemara day pages exist, how many calendar days are locked, and whether the banner shows.
set -euo pipefail
cd "$(dirname "$0")/.."

BANNER='24 days of workshops and puzzles, December 1 to 24'
fail=0
no() { echo "FAIL $when: $*"; fail=1; }

# check <build date> <banner: on|off> <locked days> <day pages that must exist> -- <that must not>
check() {
  when=$1; local banner=$2 locked=$3; shift 3
  BUILD_DATE=$when npm run build > /dev/null
  local want=1 page
  for page in "$@"; do
    if [[ $page == -- ]]; then want=0; continue; fi
    if (( want )) && [[ ! -f dist/guides/$page.html ]]; then no "$page missing"; fi
    # Days are reached only through the series calendar, never listed as guides of their own.
    if grep -qE "/guides/$page[\"<]" dist/index.html dist/guides.html dist/topics/*.html; then no "$page is listed as a guide"; fi
    if (( ! want )) && [[ -f dist/guides/$page.html ]]; then no "$page built before its release"; fi
    if (( ! want )) && grep -qE "/guides/$page[\"<]" dist/sitemap-0.xml dist/index.html dist/guides.html dist/guides/advent-of-gemara.html; then
      no "unreleased $page is linked or in the sitemap"
    fi
    # A locked day's title must not appear anywhere in the build: pages, metadata, feeds.
    # Advent days live in src/content/advent/day-N/index.yaml; other guides are Markdown.
    local src=src/content/guides/$page.md
    [[ -f $src ]] || src=src/content/advent/${page#advent-of-gemara-}/index.yaml
    local title; title=$(sed -n 's/^title: *"\(.*\)"$/\1/p' "$src")
    [[ -n $title ]] || no "no quoted title: in $src"
    if (( ! want )) && grep -rqF "$title" dist; then no "locked $page title \"$title\" is in the build"; fi
  done
  # The intro and its calendar are live the whole time; locked days show only their date.
  [[ -f dist/guides/advent-of-gemara.html ]] || no "the intro /guides/advent-of-gemara is missing"
  local n; n=$(grep -o 'data-locked' dist/guides/advent-of-gemara.html | wc -l | tr -d ' ')
  (( n == locked )) || no "$n locked days on the calendar, expected $locked"
  if [[ $banner == on ]]; then grep -qF "$BANNER" dist/index.html || no "homepage banner missing"
  else ! grep -qF "$BANNER" dist/index.html || no "homepage banner still up"; fi
  # The reminder sign-up (src/components/AdventSignup.astro) is on the intro and every released day.
  for page in advent-of-gemara "$@"; do
    [[ $page == -- ]] && break
    grep -qF hsforms.com "dist/guides/$page.html" || no "$page has no reminder sign-up"
  done
  ./scripts/check-links.sh > /dev/null || no "broken internal links (run scripts/check-links.sh)"
  echo "checked $when"
}

check 2026-11-30T05:00Z on 24 -- advent-of-gemara-day-1 advent-of-gemara-day-2
check 2026-12-01T04:59Z on 24 -- advent-of-gemara-day-1 advent-of-gemara-day-2
check 2026-12-01T05:00Z on 23 advent-of-gemara-day-1 -- advent-of-gemara-day-2
check 2026-12-02T04:59Z on 23 advent-of-gemara-day-1 -- advent-of-gemara-day-2
check 2026-12-02T05:00Z on 22 advent-of-gemara-day-1 advent-of-gemara-day-2
# Days 3-24 are not written yet, so they stay locked; update these counts as days are added.
check 2026-12-24T05:00Z on 22 advent-of-gemara-day-1 advent-of-gemara-day-2
check 2026-12-25T05:00Z on 22 advent-of-gemara-day-1 advent-of-gemara-day-2
check 2027-01-02T04:59Z on 22 advent-of-gemara-day-1 advent-of-gemara-day-2
check 2027-01-02T05:00Z off 22 advent-of-gemara-day-1 advent-of-gemara-day-2

# With the HubSpot form config empty (src/lib/hubspot.ts), no sign-up block reaches the build.
when='empty HubSpot config'
HUBSPOT_FORM_ID= BUILD_DATE=2026-12-02T05:00Z npm run build > /dev/null
if grep -rlF hsforms dist; then no "sign-up block rendered with no form ID"; fi
echo "checked $when"

exit $fail
