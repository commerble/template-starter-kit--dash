---
name: cbsync
description: "Commerble CMS のテンプレート同期 (sync.ts) の使い方を案内し、適切なコマンドを提案する"
---

# Commerble Sync Tools

このスキルは、`sync.ts` を使ったテンプレート同期の運用を支援します。
質問内容に応じて、必要な前提確認、実行コマンド、注意点を短く提示してください。

## 想定する用途

- `npm start` でビルドと同期を監視したい
- すべてのテンプレートをアップロードしたい
- 変更したテンプレートだけをアップロードしたい
- ロックモード使用時に unlock/upload を使い分けたい
- `.env` 設定不足による同期失敗を切り分けたい
- 認証済みで Commerble Web API を直接叩いて調査したい

## 前提確認

回答時は、必要に応じて次を確認してください。

- Node.js がインストール済み
- 依存関係がインストール済み (`npm install` または `yarn install`)
- ルートに `.env` があり、以下のキーが設定されている前提で案内する
  - `CBAPI_ENDPOINT`
  - `CBAPI_USERNAME`
  - `CBAPI_PASSWORD`
- `sync.ts` の `config` が要件に合っている
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
- REST ラッパー実行: `npm run rest <method> <path> [bodyJson]`
- ビルドして全件アップロード: `npm run publish`
- ビルドと同期監視を同時実行: `npm start`

直接実行の場合:

- `node sync.ts all`
- `node sync.ts watch`
- `node sync.ts unlock <path/to/file1> <path/to/file2> ...`
- `node sync.ts upload <path/to/file1> <path/to/file2> ...`
- `node sync.ts rest <method> <path> [bodyJson]`

REST 応答を AI エージェントでパースする用途では、`npm run rest ...` より `node sync.ts rest ...` を優先する。
理由: npm 実行時は npm の起動メッセージが先頭に混ざり、レスポンス抽出が不安定になる場合がある。

実行例:

```pwsh
node .\sync.ts rest get /meta/Templates?`$top=1
```

期待される出力例:

```text
200
Content-Type: application/json; odata.metadata=minimal
{"@odata.context":"https://<data-endpoint>/meta/$metadata#Templates","value":[{"Id":1,"Name":"ModdSharedViewStart","Text":"@{}","Type":"cshtml"}]}
```

## 運用ルール

- メールテンプレート (`templates/Mail/`) は `templates/Mail/SharedFunctions.cshtml` の結合処理に依存するため、同期ロジックを壊す編集は避ける
- `useLockMode: true` の場合は、ブランチ状態とロック解除手順を優先して案内する
- AI エージェントは `.env` ファイルを直接読まない
- 認証情報は表示しない。必要なら「キー名のみ」確認する
- エラー時は、`.env` 設定、対象パス、lock 状態の順で切り分ける
- REST 実行時は、メソッドとパスの組み合わせ、JSON文字列の妥当性、レスポンスステータスの順で切り分ける

## 回答スタイル

- 先に「やること」を 1-2 行で示す
- その後に実行コマンドを提示する
- 失敗時の確認項目を最大 3 点で示す