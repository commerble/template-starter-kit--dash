---
name: master-data
description: "Commerble CMS の管理 WEB API を使ったマスタデータの取得・作成・更新・削除を案内する"
---

# Master Data Management

このスキルは、Commerble CMS の管理 WEB API を使って、ECデータ、CMSデータ、メタデータを操作する手順を案内します。
質問内容に応じて、対象API、実行コマンド、注意点を短く提示してください。

## 想定する用途

- 商品やSKUなどの EC マスタを取得したい
- CMS 設定やサイト設定を取得したい
- メタデータを確認したい
- 管理 WEB API でレコードを追加したい
- 管理 WEB API でレコードを更新したい
- 管理 WEB API でレコードを削除したい
- OData のパスやクエリ文字列の組み立て方を確認したい

## 前提確認

回答時は、必要に応じて次を確認してください。

- Node.js がインストール済み
- 依存関係がインストール済み (`npm install` または `yarn install`)
- ルートに `.env` があり、以下のキーが設定されている前提で案内する
  - `CBAPI_ENDPOINT`
  - `CBAPI_USERNAME`
  - `CBAPI_PASSWORD`
- `sync.ts` の `rest` サブコマンドが利用できる
- 対象データがどのAPI配下かを確認する
  - EC データ: `/ec`
  - CMS データ: `/cms`
  - メタデータ: `/meta`

## 基本コマンド

ユーザーの意図に応じて、次のコマンドを案内してください。

- 一覧取得: `node sync.ts rest get /ec/Products`
- 単一取得: `node sync.ts rest get /cms/SiteConfigs(1)`
- 作成: `node sync.ts rest post /ec/Products '{"Code":"sample"}'`
- 更新: `node sync.ts rest patch /cms/SiteConfigs(1) '{"Value":"updated"}'`
- 削除: `node sync.ts rest delete /meta/Templates(1)`

必要に応じて `npm run rest <method> <path> [bodyJson]` も案内できるが、
AI エージェントが応答を扱う場合は `node sync.ts rest ...` を優先する。

## API の使い分け

- EC データは `/ec/...` を使う
- CMS データは `/cms/...` を使う
- メタデータは `/meta/...` を使う
- スキーマ確認が必要な場合は `.knowledge/common/$metadata--ec.xml`、`.knowledge/tenant/$metadata--cms.xml`、`.knowledge/common/$metadata--meta.xml` を参照する前提で案内する

## OData クエリ例

実行例:

```pwsh
node .\sync.ts rest get /ec/Products?`$top=10
node .\sync.ts rest get /cms/SiteConfigs?`$filter=contains(Code,'Site')
node .\sync.ts rest get /meta/Templates?`$select=Id,Name&`$top=5
```

更新例:

```pwsh
node .\sync.ts rest patch /ec/Products(1) '{"Name":"Updated Product"}'
```

作成例:

```pwsh
node .\sync.ts rest post /cms/SiteConfigs '{"Code":"Sample","Value":"test"}'
```

## 運用ルール

- まず対象が `/ec`、`/cms`、`/meta` のどれかを特定してから案内する
- 削除や更新は対象IDやキーを再確認してから案内する
- JSON ボディは最小限の項目に絞る
- 認証情報は表示しない。必要ならキー名のみ確認する
- エラー時は、パス、HTTPメソッド、JSON文字列、レスポンスステータスの順で切り分ける
- テンプレート同期とマスタデータ操作は目的が異なるため、混同せず `rest` サブコマンド中心で案内する

## 回答スタイル

- 先に「どのAPIを使うか」と「やること」を 1-2 行で示す
- その後に実行コマンドを提示する
- 失敗時の確認項目を最大 3 点で示す