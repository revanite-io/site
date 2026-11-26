#!/usr/bin/env bash
# Checks the Advent of Gemara examples and puzzle files against the published Gemara spec,
# so a spec release that breaks a day fails CI. Needs CUE v0.15.1 or later.
set -euo pipefail
cd "$(dirname "$0")/.."

spec=github.com/gemaraproj/gemara@latest
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

# Code blocks opened as ```yaml vet=#Definition (or json) must pass `cue vet` against that definition.
for md in src/content/guides/advent-of-gemara*.md; do
  awk -v tmp="$tmp" -v name="$(basename "$md" .md)" '
    /^```(yaml|json) vet=#/ { n++; split($0, a, " vet="); f = tmp "/" name "-" n "." substr(a[1], 4); print a[2] "\t" f >> (tmp "/blocks.tsv"); body = 1; next }
    body && /^```/ { body = 0; next }
    body { print > f }
  ' "$md"
done
if [[ -f "$tmp/blocks.tsv" ]]; then
  while IFS=$'\t' read -r def file; do
    echo "cue vet -d '$def' $file"
    cue vet -c -d "$def" "$spec" "$file"
  done < "$tmp/blocks.tsv"
fi

# Day 2: the sample audit.yaml shown on the page (vetted above) must match the download.
cmp "$tmp/advent-of-gemara-day-2-1.yaml" public/advent-of-gemara/audit.yaml ||
  { echo "Day 2 audit.yaml code block differs from public/advent-of-gemara/audit.yaml" >&2; exit 1; }
cue vet -c -d '#AuditLog' "$spec" public/advent-of-gemara/audit.yaml

# Day 2: rejected-audit.yaml must fail, and pass once the four intended fixes are made.
rejected=public/advent-of-gemara/rejected-audit.yaml
if cue vet -c -d '#AuditLog' "$spec" "$rejected" > /dev/null 2>&1; then
  echo "$rejected passes cue vet, so the Day 2 puzzle has nothing to fix" >&2
  exit 1
fi
# The third result reuses the ID RES-02; the fix renames that second one to RES-03.
sed -e 's/type: Observations$/type: Observation/' \
    -e 's/required: "yes"$/required: true/' \
    -e 's/reference-id: osps-baseline$/reference-id: osps-baseline-2026-08/' \
    "$rejected" | awk '/^  - id: RES-02$/ && ++seen == 2 { sub(/RES-02/, "RES-03") } { print }' > "$tmp/fixed-audit.yaml"
cue vet -c -d '#AuditLog' "$spec" "$tmp/fixed-audit.yaml"
echo "Advent of Gemara examples and puzzle files pass."
