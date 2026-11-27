#!/usr/bin/env bash
# Render scripts/og/<name>.svg to public/images/<name>.png (1200x630) with headless Chrome.
# Usage: scripts/og/render.sh advent-of-gemara-og   (set CHROME to override the browser path)
set -euo pipefail
name=${1:?usage: $0 <name>}
dir=$(cd "$(dirname "$0")" && pwd)
out="$dir/../../public/images/$name.png"
chrome=${CHROME:-"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"}
"$chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 --screenshot="$out" "file://$dir/$name.svg" >/dev/null 2>&1
echo "wrote public/images/$name.png"
