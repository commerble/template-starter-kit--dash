# AGENTS.md

このファイルは、このリポジトリで作業するAIエージェント向けの運用ガイドです。

## 最優先ルール

1. `.knowledge/` の記載を常に正とする。
2. 本ファイルと `.knowledge/` の内容が重複・矛盾する場合は、`.knowledge/` を採用する。
3. 仕様に迷ったら、まず `.knowledge/` を再確認してから実装する。
4. Windows/Mac の双方で作業する前提で、コード検索・編集は OS 依存コマンドより VS Code のツールを優先して行う。

## 参照順序（作業開始時）

1. `.knowledge/tools.md`（同期手順・運用）
2. `.knowledge/template--front.md`（フロントテンプレート規約）
3. `.knowledge/template--mail.md`（メールテンプレート規約）
4. `.knowledge/template--custom-query.md`（カスタムクエリ規約）
5. `.knowledge/razor.md`（Razor記法）
6. `.knowledge/template-helpers.md`（Template Helper API）
7. `.knowledge/browse.md`（確認用URLの扱い）

## プロジェクト概要

Template Starter Kit for Dash は、Commerble CMS 向けテンプレート開発用スターターキットです。
ローカルで SCSS/JS をビルドし、`sync.js` でテンプレートを Commerble API に同期します。

## 編集対象と禁止対象

- 編集対象: `templates/`, `scss/`, `src/`, 必要に応じて `sync.js` などのソース。
- 原則禁止: ビルド成果物の直接編集（例: `templates/Bundle/` 配下）。
- 同期はローカルからサーバーへの片方向運用。サーバー側変更の取り込み前提で作業しない。

## テンプレート種別ごとの重要ルール

### 1) フロントテンプレート（`templates/` 配下の主に `Modd/`, `Layout/` など）

- 拡張子は `.cshtml`、Razor構文を使用。
- テンプレート名は同期時に `templates/` より下のパスをフラット結合して登録される。
  - 例: `templates/Layout/Default.cshtml` -> `LayoutDefault`
- ファイル名は `[a-zA-Z][a-zA-Z0-9_]*` を満たす。先頭 `_` ルールは採用しない。
- `Database.Query` / `Database.Single` はキャッシュ前提。必要ならキャッシュキーを設計する。
- サイトテンプレートはCDNキャッシュ制約を考慮し、Cookie/Session依存の実装を避ける。

### 2) メールテンプレート（`templates/Mail/`）

- `sync.js` の `mailTemplatePrefix` で示されるフォルダ配下をメールテンプレートとして扱う（通常 `Mail`）。
- 同期時、`mailSharedTemplatePath` で指定された共有ファイルが各メール先頭へ結合される。
- 引数は `ViewBag.Parameters`（`string`辞書）から取得する。
- `Database.CMS` / `Database.EC` の読み取りクエリが利用可能（フロントとキャッシュ挙動が異なる点に注意）。

### 3) カスタムクエリテンプレート（`templates/Query/`）

- 拡張子は `.csx`（C#スクリプト）。
- ルートスコープの終端セミコロンなし式が戻り値になる。
- テンプレート名はフラット結合（例: `templates/Query/Orders.csx` -> `QueryOrders`）。
- `Database.CMS` / `Database.EC` の読み取りクエリを利用可能。

## 開発・同期コマンド（`package.json`準拠）

- 開発（ビルド監視 + 同期監視）: `npm start`
- 本番ビルド: `npm run build`
- 同期監視: `npm run upload:watch`
- 全テンプレート同期: `npm run upload:all`
- 指定ファイル同期: `npm run upload <...files>`
- ビルド後に全同期: `npm run publish`

補足:

- 同期スクリプトの実体は `sync.js`。
- `sync.js` の `sharedTemplates`, `ignoreTemplates`, `useLockMode` を変更する場合は影響範囲を確認する。
- 同期運用の案内やコマンド提案は、必要に応じてスキル `cbsync` の方針を優先する。

## 実装時チェックリスト

1. 変更対象がテンプレート種別（front/mail/query）のどれかを特定したか。
2. `.knowledge` の対応ドキュメントを確認したか。
3. 命名規則（フラット化後のテンプレート名・ファイル名制約）を満たすか。
4. 共有テンプレート結合ロジック（特にメール）を壊していないか。
5. 必要なコマンドでビルド/同期確認を行ったか。

## セキュリティと運用上の注意

- `.env` の認証情報は参照しても出力しない。
- APIキー・パスワード・個人情報をログや提案文に含めない。
- `Page.Template.GetModdUser()` の戻り値は機微情報を含むため、シリアライズや露出に注意する。

## 追加メモ

- URL確認が必要な場合、`.knowledge/browse.md` のとおり `CBPAAS_FRONT` 環境変数を参照する。
- Razor仕様は ASP.NET Core/Blazor ではなく、`.knowledge/razor.md` を基準に判断する。
