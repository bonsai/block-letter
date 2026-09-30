# block-letter

Unicode block-letter text writer / matrix composition experiment.

文字を「文字列」ではなく **7×7 の行列ブロック**として定義し、表示時に行ごとにスライスして横方向へ合成します。

## Concept

```
Glyph
  ↓
7×7 Matrix
  ↓
row slice
  ↓
compose
  ↓
Unicode Braille
```

- 1文字 = 7×7 matrix
- 文字同士は横方向に compose
- 表示時は1行ずつ slice
- `data/fonts.jsonl` がフォントのデータ定義
- TS/JS側はデータを読む・合成する・表示する役割
- 将来的に 3×3 / 5×5 / 7×7 と解像度を変えられる

## Data

`data/fonts.jsonl` は1行1glyph。

```json
{"id":"A","size":7,"rows":["0111110","1100011","1100011","1111111","1100011","1100011","1100011"]}
```

## Demo

GitHub Pages で公開できます。

- Input: `BONSAI`
- Output: Unicode Braille letter art

## Structure

```
block-letter/
├── README.md
├── index.html
├── data/
│   └── fonts.jsonl
└── src/
    ├── main.js
    └── style.css
```

## License

MIT
