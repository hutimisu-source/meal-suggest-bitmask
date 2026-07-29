# 献立提案アプリ (Meal Suggest)

## 概要

選択した食材から、作成可能な料理を提案するWebアプリです。

ユーザーが手元にある食材をチェックすると、必要な食材を満たしている料理を検索し、レシピページへのリンクを表示します。

## Demo

GitHub Pages:  
https://hutimisu.github.io/meal-suggest/

## Features

- 食材をチェックボックスで選択
- 選択した食材から作成可能な料理を検索
- レシピサイトへのリンクを表示
- JSONによる食材・料理データの管理
- ビットマスクを利用した高速な料理検索

## Technology

- HTML
- CSS
- JavaScript
- JSON
- GitHub Pages

## Algorithm

料理と食材をビットマスクで管理しています。

各食材にIDを割り当て、そのIDをビット位置として扱います。

例

```
鶏むね肉 (id:0) → 00000001
卵 (id:6)       → 01000000
```

選択した食材のビット列と、料理に必要な食材のビット列を比較し、

```javascript
(recipeMask & selectedMask) === recipeMask
```

を満たす場合、その料理は作成可能と判定します。

## 実行方法

このアプリでは `fetch()` を使用して JSON ファイルを読み込んでいます。

そのため、`index.html` を直接開く（`file://`）と、ブラウザのセキュリティ制限（CORS）により正常に動作しない場合があります。

ローカルで動作確認を行う場合は、ローカルサーバーを利用してください。

### VS Code の Live Server を利用する場合

1. Live Server 拡張機能をインストールする
2. `index.html` を右クリックする
3. **Open with Live Server** を選択する

ブラウザで表示されたURL（例：`http://127.0.0.1:5500/`）にアクセスしてください。

※ GitHub Pages 上では通常どおり動作します。
