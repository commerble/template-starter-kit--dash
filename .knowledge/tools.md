# ツール

## 同期スクリプト (`sync.ts`)

このスクリプトは、ローカルのテンプレートファイルをCommerble EC PaaS APIと同期します。検証、アップロード、ファイル監視を処理します。

※ AIエージェントはスキル化された`cbsync`を参照してください。

### 前提条件

*   Node.jsがインストールされていること。
*   依存関係がインストールされていること（`npm install` または `yarn install`）。
    *   `chokidar`
    *   `dotenv`

### 設定

ルートディレクトリに以下のキーを持つ`.env`ファイルを作成します。

```properties
CBAPI_ENDPOINT=https://api.example.invalid/odata
CBAPI_USERNAME=your_username
CBAPI_PASSWORD=your_password
# オプション: ロックされていても強制的にアップロードします（注意して使用してください）
# CBSYNC_FORCE_UPLOAD_ALL=1
```

また、スクリプトの`sync.ts`の先頭には、以下の項目を定義する内部的な`config`オブジェクトがあります。
*   `templateDirPath`: テンプレートを含むディレクトリ（デフォルト: `./templates`）。
*   `mailTemplatePrefix`: メールテンプレートのプレフィックス（デフォルト: `Mail`）。
*   `mailSharedTemplatePath`: 各メールテンプレートの先頭に文字列結合する疑似共有テンプレートのパス（例: `./templates/Mail/SharedFunctions.cshtml`）
*   `sharedTemplates`: 共有テンプレートのリスト（例: `ModdSharedFunctions`）。
*   `ignoreTemplates`: スキップするテンプレートのリスト。
*   `useLockMode`: 他のブランチからの変更の上書きを防ぐためのロックメカニズムを有効にします（デフォルト: `false`）。

### 使用方法

`package.json` に定義されたnpmタスクからも実行できます。

```bash
# 変更を監視して自動でアップロード
npm run upload:watch

# 全てのテンプレートをアップロード
npm run upload:all

# テンプレートファイルを指定してアップロード
npm run upload <...files>

# 認証済みでREST APIを実行
npm run rest <method> <path> [bodyJson]

# ファイルをビルドして全てのテンプレートをアップロード
npm run publish

# ファイルのビルドとアップロードを監視モードで並行実行
npm start
```

また、以下のいずれかのモードでNode.jsを使用して直接スクリプトを実行することもできます。

```bash
node sync.ts <cmd> [args]
```

#### サブコマンド

1.  **`all`**
    *   `templateDirPath`内のすべてのテンプレートをアップロードします。
    *   アップロード前にテンプレートを検証します。
    *   `useLockMode`が有効な場合、ロックをチェックします。
    *   **コマンド:** `node sync.ts all`

2.  **`watch`**
    *   `templateDirPath`内のファイルの変更を監視します。
    *   変更されたファイルを自動的に検証し、アップロードします。
    *   依存ファイルが変更された場合、共有テンプレートをリロードします。
    *   **コマンド:** `node sync.ts watch`

3.  **`unlock`**
    *   特定のファイルのロックを解除し（ロックフレーズを削除）、アップロードします。
    *   `useLockMode`が有効な場合に使用します。
    *   **コマンド:** `node sync.ts unlock <path/to/file1> <path/to/file2> ...`

4.  **`upload`**
    *   特定のファイルのロックをアップロードします。
    *   アップロード前にテンプレートを検証します。
    *   **コマンド:** `node sync.ts upload <path/to/file1> <path/to/file2> ...`

5.  **`rest`**
    *   `.env` の認証設定を使って、任意のCommerble Web APIパスへRESTリクエストを送信します。
    *   同期処理を走らせず、HTTPステータス・`Content-Type`・レスポンス本文を標準出力に表示します。
    *   第3引数にJSON文字列を渡すと、`Content-Type: json` ヘッダー付きでリクエストボディとして送信します。
    *   AIエージェントが出力をパースする用途では `npm run rest ...` より `node sync.ts rest ...` を推奨します（npm の起動メッセージ混入を避けるため）。
    *   **コマンド:** `node sync.ts rest <method> <path> [bodyJson]`

    例:

    ```pwsh
    node .\sync.ts rest get /meta/Templates?`$top=1
    ```


### ロックモード (`useLockMode: true`)

`config`で有効にすると、スクリプトは安全機構を追加します。
*   現在のGitブランチがデフォルトブランチ（例: `main`）であるかを確認します。
*   ローカルの`main`ブランチが古い場合やマージされていない変更がある場合にアップロードを防ぎます。
*   アップロード時にテンプレートコンテンツの先頭にロックフレーズ（コメント）を追加し、どのブランチがロックしたかを示します。
