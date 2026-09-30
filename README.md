# block-letter

Unicode block-letter text writer.

ブラウザで文字を入力すると、Unicode の点字・ブロック文字で大きく描画します。

## Demo

GitHub Pages で公開できます。

- Input: `BONSAI`
- Output: Unicode braille letter art

## Structure

```
block-letter/
├── README.md
├── index.html
├── src/
│   ├── main.js
│   └── style.css
└── data/
    └── fonts.jsonl
```

## Design

- Text → glyph matrix → Unicode output
- Font definitions are data, not code
- `data/fonts.jsonl` is the font dictionary
- Output can be copied as plain Unicode text

## Run

Open `index.html` directly in a browser, or serve the repository with any static server.

## License

MIT
