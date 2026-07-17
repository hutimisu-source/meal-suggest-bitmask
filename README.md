# 献立提案アプリ (Meal Suggest)

## 概要

選択した食材から、作成可能な料理を提案するWebアプリです。

ユーザーが手元にある食材をチェックすると、必要な食材を満たしている料理を検索し、レシピページへのリンクを表示します。

## Demo

GitHub Pages:
https://hutimisu.github.io/meal-suggest

## Features

- 食材をチェックボックスで選択
- 選択した食材から作成可能な料理を検索
- レシピサイトへのリンク表示
- JSONによる食材・料理データ管理
- ビットマスクを利用した高速な料理検索

## Technology

- HTML
- CSS
- JavaScript
- JSON
- GitHub Pages

## Algorithm

料理と食材をビットマスクで管理しています。

各食材にIDを割り当て、IDをビット位置として扱います。

例:
鶏むね肉(id:0) → 0001
卵(id:6) → 0100 0000


選択した食材のビットと料理に必要な食材のビットを比較し、


(recipeMask & selectedMask) == recipeMask


を満たす場合、その料理を作成可能と判定します。
