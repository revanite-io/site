#!/usr/bin/env bash
# Boundary builds for the release rule: builds the site as of each release edge and asserts
# which Advent of Gemara pages and which homepage banner wording the build contains.
set -euo pipefail
cd "$(dirname "$0")/.."

SOON='24 days of workshops and puzzles, starting December 1'
LIVE='is live: a new workshop and puzzle every day until December 24.'
fail=0

# check <build date> <banner: soon|live> <pages that must exist> -- <pages that must not>
check() {
  local when=$1 banner=$2; shift 2
  BUILD_DATE=$when npm run build > /dev/null
  local want=1 page
  for page in "$@"; do
    if [[ $page == -- ]]; then want=0; continue; fi
    local file="dist/guides/$page.html"
    if (( want )) && [[ ! -f $file ]]; then echo "FAIL $when: $page missing"; fail=1; fi
    if (( ! want )) && [[ -f $file ]]; then echo "FAIL $when: $page built before its release"; fail=1; fi
    if (( ! want )) && grep -qE "/guides/$page[\"<]" dist/sitemap-0.xml dist/index.html dist/guides.html dist/guides/advent-of-gemara.html; then
      echo "FAIL $when: unreleased $page is linked or in the sitemap"; fail=1
    fi
  done
  local text=$SOON; [[ $banner == live ]] && text=$LIVE
  grep -qF "$text" dist/index.html || { echo "FAIL $when: homepage banner is not the $banner wording"; fail=1; }
  # Before the intro releases, the series URL is the coming-soon page.
  if [[ $banner == soon ]] && ! grep -qF 'Day 1 unlocks' dist/guides/advent-of-gemara.html; then
    echo "FAIL $when: /guides/advent-of-gemara is not the coming-soon page"; fail=1
  fi
  if [[ $banner == live ]] && ! grep -qF 'The days' dist/guides/advent-of-gemara.html; then
    echo "FAIL $when: /guides/advent-of-gemara is not the series intro"; fail=1
  fi
  echo "checked $when"
}

check 2026-12-01T04:59Z soon advent-of-gemara -- advent-of-gemara-day-1 advent-of-gemara-day-2
check 2026-12-01T05:00Z live advent-of-gemara advent-of-gemara-day-1 -- advent-of-gemara-day-2
check 2026-12-02T04:59Z live advent-of-gemara advent-of-gemara-day-1 -- advent-of-gemara-day-2
check 2026-12-02T05:00Z live advent-of-gemara advent-of-gemara-day-1 advent-of-gemara-day-2
check 2026-12-24T05:00Z live advent-of-gemara advent-of-gemara-day-1 advent-of-gemara-day-2
check 2026-12-25T05:00Z live advent-of-gemara advent-of-gemara-day-1 advent-of-gemara-day-2

exit $fail
