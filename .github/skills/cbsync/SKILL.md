---
name: cbsync
description: "Commerble CMS のテンプレート同期 (sync.js) の使い方を案内し、適切なコマンドを提案する"
---

# Commerble Sync Tools

このスキルは、`sync.js` を使ったテンプレート同期の運用を支援します。
質問内容に応じて、必要な前提確認、実行コマンド、注意点を短く提示してください。

## 想定する用途

- `npm start` でビルドと同期を監視したい
- すべてのテンプレートをアップロードしたい
- 変更したテンプレートだけをアップロードしたい
- ロックモード使用時に unlock/upload を使い分けたい
- `.env` 設定不足による同期失敗を切り分けたい

## 前提確認

回答時は、必要に応じて次を確認してください。

- Node.js がインストール済み
- 依存関係がインストール済み (`npm install` または `yarn install`)
- ルートに `.env` があり、以下のキーが設定されている前提で案内する
  - `CBAPI_ENDPOINT`
  - `CBAPI_USERNAME`
  - `CBAPI_PASSWORD`
- `sync.js` の `config` が要件に合っている
  - `templateDirPath`
  - `mailTemplatePrefix`
  - `mailSharedTemplatePath`
  - `sharedTemplates`
  - `ignoreTemplates`
  - `useLockMode`

## 基本コマンド

ユーザーの意図に応じて、次のコマンドを案内してください。

- 監視しながら同期: `npm run upload:watch`
- 全件アップロード: `npm run upload:all`
- 指定ファイルアップロード: `npm run upload <...files>`
- ビルドして全件アップロード: `npm run publish`
- ビルドと同期監視を同時実行: `npm start`

直接実行の場合:

- `node sync.js all`
- `node sync.js watch`
- `node sync.js unlock <path/to/file1> <path/to/file2> ...`
- `node sync.js upload <path/to/file1> <path/to/file2> ...`

## 運用ルール

- メールテンプレート (`templates/Mail/`) は `templates/Mail/SharedFunctions.cshtml` の結合処理に依存するため、同期ロジックを壊す編集は避ける
- `useLockMode: true` の場合は、ブランチ状態とロック解除手順を優先して案内する
- AI エージェントは `.env` ファイルを直接読まない
- 認証情報は表示しない。必要なら「キー名のみ」確認する
- エラー時は、`.env` 設定、対象パス、lock 状態の順で切り分ける

## 回答スタイル

- 先に「やること」を 1-2 行で示す
- その後に実行コマンドを提示する
- 失敗時の確認項目を最大 3 点で示す