# Template Starter Kit for Dash

Commerble CMSのテンプレート開発を効率化するためのスターターキットです。
SCSSとJavaScriptのアセットパイプライン、およびCommerbleプラットフォームへのテンプレート同期機能を提供します。

## 主な機能

-   SCSSとJavaScriptのバンドルとミニファイ
-   ファイルの変更を監視して自動でビルド
-   Commerble CMSへのテンプレートのアップロード（同期）
-   開発中のリアルタイム同期 (`watch`モード)
-   本番環境向けの全テンプレートアップロード
-   Commerble Web APIを直接確認できるRESTラッパー実行

## ディレクトリ構成

```
.
├── build/              # Webpackのカスタムローダー
├── scss/               # スタイルシートのソースファイル
├── src/                # JavaScriptのソースファイル
├── templates/          # Commerbleのテンプレートファイル（ビルド成果物も含む）
├── sync.ts             # テンプレート同期スクリプト
├── webpack.config.js   # Webpack設定ファイル
└── package.json
```

## セットアップ

1.  **依存関係のインストール**

    ```bash
    npm install
    ```

2.  **環境変数の設定**

    プロジェクトのルートに`.env`ファイルを作成し、Commerble Web APIへの接続情報を設定します。

    ```.env
    CBAPI_ENDPOINT="https://your-site.commerble.com/api/data"
    CBAPI_USERNAME="your_api_username"
    CBAPI_PASSWORD="your_api_password"
    ```

    これらの環境変数キーは`sync.ts`内で変更可能です。

## 利用可能なスクリプト

| スクリプト                | 説明                                                                       |
| ------------------------- | -------------------------------------------------------------------------- |
| `npm start`               | 開発モードを開始します。ファイルの変更を監視し、自動でビルドと同期を行います。 |
| `npm run publish`         | 本番用にアセットをビルドし、すべてのテンプレートをアップロードします。     |
| `npm run build`           | 本番用にアセットをビルドします。                                           |
| `npm run build:watch`     | 開発用にアセットをビルドし、ファイルの変更を監視します。                   |
| `npm run upload:all`      | すべてのテンプレートをCommerbleにアップロードします。                      |
| `npm run upload:watch`    | テンプレートファイルの変更を監視し、変更があった場合に同期します。         |
| `npm run upload <path>`   | 指定したテンプレートを同期します。                                         |
| `npm run unlock <path>`   | 指定したテンプレートのロックを解除します。                                 |
| `npm run rest <method> <path> [bodyJson]` | 同じ認証設定でCommerble Web APIへ任意のRESTリクエストを送信します。レスポンスのステータス・Content-Type・本文をそのまま確認できます。 |

## テンプレート同期の設定 (`sync.ts`)

テンプレートの同期に関する詳細な設定は`sync.ts`ファイルで行います。

```javascript
const config = {
    // Commerble Web APIの認証情報が設定されている環境変数キー
    apiEndpointEnvKey: 'CBAPI_ENDPOINT',
    apiUsernameEnvKey: 'CBAPI_USERNAME',
    apiPasswordEnvKey: 'CBAPI_PASSWORD',

    // 同期対象のテンプレートが格納されているディレクトリ
    templateDirPath: './templates',

    // メールテンプレートとして認識するためのファイル名プレフィックス
    mailTemplatePrefix: 'Mail',

    // メールテンプレートの先頭に文字列結合する共有ファイル
    mailSharedTemplatePath: './templates/Mail/SharedFunctions.cshtml',

    // 複数のテンプレートで共有されるテンプレート
    sharedTemplates: [
        'ModdSharedViewStart',
        // ...
    ],

    // 同期から除外するテンプレート
    ignoreTemplates: [
        'MailSharedFunctions'
    ],

    // 同期ロック機能の使用（trueにすると、指定ブランチ以外での変更時にロックがかかる）
    useLockMode: false,

    // ロック機能が有効な場合に、watchモードを禁止するブランチ
    gitDefaultBranch: 'main',
}
```

## 注意事項

-   **片方向同期**: このスターターキットによるテンプレート同期は、ローカル環境からCommerbleプラットフォームへの**片方向**です。管理画面上で行った変更はローカルファイルには反映されません。
-   **開発ブランチ**: `sync.ts`の`useLockMode`を`true`に設定した場合、`gitDefaultBranch`で指定されたブランチ（デフォルトは`main`）では`npm start`や`npm run upload:watch`などの監視モードは安全のため動作しません。開発時はフィーチャーブランチなど、`main`以外のブランチで作業してください。

## 開発手順

`npm run start`を実行し、各ファイルを編集します。

[!TIP]
もし、`useLockMode`を使用している場合は、`npm run start`の前に作業ブランチにチェックアウトして実行します。作業中に`origin/main`ブランチに変更が発生すると同期タスクは強制終了します。このとき同期タスクを再実行する前に、`origin/main`の変更を作業ブランチにマージする必要があります