# Social preview images

Each `<name>.svg` here renders to `public/images/<name>.png` (1200×630):

```
scripts/og/render.sh advent-of-gemara-og
```

The SVGs embed their font as a WOFF2 subset, so they render the same on any machine with Chrome. To change the text, re-subset the font with the new glyphs and replace the base64 in the `@font-face`:

```
python3 -m fontTools.subset SourceSerif4-60pt-SemiBold.ttf --text="Advent of Gemara" --flavor=woff2 --output-file=sub.woff2
base64 -i sub.woff2
```

The 60pt SemiBold TTF is Google Fonts' static instance of Source Serif 4 (opsz 60, wght 600), SIL OFL 1.1.
