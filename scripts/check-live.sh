#!/usr/bin/env bash
# Checks the deployed site against the release rule, so a scheduled release that silently
# did nothing fails the Pages run. Usage: check-live.sh <site url> <build time, ISO 8601 UTC>
# Every Advent guide released by <build time> must be live, every later one must 404, and the
# homepage banner must match whether the series intro is out.
set -euo pipefail
cd "$(dirname "$0")/.."

site=${1%/} built=$(date -u -d "$2" +%s)
SOON='24 days of workshops and puzzles, starting December 1'
LIVE='is live: a new workshop and puzzle every day until December 24.'

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
  local text=$SOON
  released src/content/guides/advent-of-gemara-intro.md && text=$LIVE
  curl -s "$site/" | grep -qF "$text" || { echo "  homepage banner is not: $text"; ok=1; }
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
