#!/usr/bin/env bash
# Checks the deployed site against the release rule, so a scheduled release that silently
# did nothing fails the Pages run. Usage: check-live.sh <site url> <build time, ISO 8601 UTC>
# The series intro must be live, every Advent day released by <build time> must be live, every
# later one must 404, and the homepage banner must be up until 05:00 UTC on 2027-01-02.
set -euo pipefail
cd "$(dirname "$0")/.."

site=${1%/} built=$(date -u -d "$2" +%s)
BANNER='24 days of workshops and puzzles, December 1 to 24'

released() { # same rule as src/lib/content.ts: 05:00 UTC on `date:`, never drafts
  local d; d=$(sed -n 's/^date: *\([0-9-]*\).*/\1/p' "$1" | head -1)
  ! grep -q '^draft: *true' "$1" && (( $(date -u -d "$d 05:00" +%s) <= built ))
}

attempt() {
  local ok=0 f page want got
  for f in src/content/guides/advent-of-gemara-day-*.md; do
    page=$(basename "$f" .md)
    want=404; released "$f" && want=200
    got=$(curl -s -o /dev/null -w '%{http_code}' "$site/guides/$page")
    [[ $got == "$want" ]] || { echo "  /guides/$page: HTTP $got, expected $want"; ok=1; }
  done
  got=$(curl -s -o /dev/null -w '%{http_code}' "$site/guides/advent-of-gemara")
  [[ $got == 200 ]] || { echo "  /guides/advent-of-gemara: HTTP $got, expected 200"; ok=1; }
  if (( built < $(date -u -d '2027-01-02 05:00' +%s) )); then
    curl -s "$site/" | grep -qF "$BANNER" || { echo "  homepage banner is missing"; ok=1; }
  else
    ! curl -s "$site/" | grep -qF "$BANNER" || { echo "  homepage banner is still up"; ok=1; }
  fi
  return $ok
}

# The Pages CDN can serve the previous build for a few minutes after a deploy.
for try in 1 2 3 4 5 6 7 8 9 10; do
  echo "check $try against $site (built $2)"
  attempt && { echo "live site matches the release rule"; exit 0; }
  sleep 60
done
echo "live site does not match the release rule after 10 minutes" >&2
exit 1
