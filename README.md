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


## Game

**BLOCK LETTER GAME** は、7×7 の行列ブロックを操作して文字を組み立てるゲームです。

> 文字を読むのではなく、文字を組み立てる。

### Tetrisとの違い

| | Tetris | BLOCK LETTER |
|---|---|---|
| 基本単位 | 4セルのテトリミノ | 3×3 / 5×5 / 7×7 の行列 |
| 操作 | 移動・回転・落下 | セルを配置・切替 |
| 完成条件 | 行を揃える | 目標の文字形を揃える |
| 完成後 | 行が消える | 文字として残る |
| 出力 | スコア | 文字・単語・作品 |
| データ | ピースのルール | JSONLでglyphを定義 |

ゲームの基本ループは、

```
Tetris:
落ちる → 積む → 揃う → 消える → また積む

BLOCK LETTER:
空間 → ブロックを置く → 行列を作る
       → 文字が完成 → 文字を横に合成 → 単語・作品
```

つまり、BLOCK LETTER は「ブロックを操作する」部分ではTetrisに近い一方、**完成した構造を消さず、成果物として残す**ことを中心にします。

### Game Modes

- **COPY** — 見本と同じglyphを作る
- **MEMORY** — 一度見たglyphを記憶して作る
- **SPEED** — 制限時間内に完成させる
- **WORD** — 複数glyphから単語を作る
- **COLOR** — 色を含む行列を組み立てる
- **COMPOSE** — 完成した文字を横方向に合成して作品を作る

### MVP

1. 7×7 matrix
2. 1色
3. A–Z
4. COPY mode
5. GitHub Pagesでプレイ

将来的には3×3 / 5×5 / 7×7を解像度として扱い、色・速度・記憶・単語・組版へ拡張します。

## Design Principle

文字は線ではなく、まず**面積＝行列**として持つ。

```
Glyph
 ↓
Matrix
 ↓
Slice
 ↓
Compose
 ↓
Compile
 ↓
Display / Game
```

ここで「モノイド」と呼ぶ場合は、単に行列だからではなく、合成操作について

1. 閉包性
2. 結合律
3. 単位元

の3条件を定義・確認する必要があります。
