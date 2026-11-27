#!/usr/bin/env bash
# Every internal link in the build (href="/...") must resolve to a built file, so no card, calendar
# door or nav link can 404. Run after `npm run build`.
set -euo pipefail
cd "$(dirname "$0")/.."

fail=0
while IFS=: read -r page link; do
  path=${link%%[#?]*}
  [[ $path == / ]] && path=/index
  if [[ ! -f dist$path && ! -f dist$path.html && ! -f dist$path/index.html ]]; then
    echo "broken link in ${page#dist/}: $link" >&2
    fail=1
  fi
done < <(grep -oE 'href="/[^/"][^"]*"|href="/"' -r dist --include='*.html' | sed -E 's/href="([^"]*)"/\1/' | sort -u)
(( fail == 0 )) && echo "All internal links resolve."
exit $fail
