# AGENTS.md

- ユーザとのやり取りは**日本語**で行う。
- デフォルトシェルは**pwsh(PowerShell7)**です。
  + スクリプト作業はPowerShellを使用し、NodeやPythonは避ける
  + rg(ripgrep)やfd(fd-find)は使用してよい
- pwshで文字列の$を渡したい場合、展開されないよう気をつけてください。  
  ```pwsh
  '$filter' # OK: シングルクォーテーションで囲われている場合、$はそのまま出力されます
  "$filter" # NG. ダブルクォーテーションで囲われている場合、$filterを変数とみなし展開を試みます。
  "`$filter" # OK: バッククォートでエスケープします。
  ```

## 情報源

1. `.knowledge/` をプロジェクト仕様の正とし、競合する記述より優先する。
2. 最初に `.knowledge/README.md` を確認し、依頼に必要な `repo/`、`common/`、`tenant/` の資料だけを読む。
3. Razor は ASP.NET Core や Blazor ではなく、Commerble の .NET Framework 版 RazorEngine の仕様として扱う。

## 共通制約

- `templates/Bundle/` などのビルド成果物を直接編集しない。
- 同期では `.github/skills/cbsync/SKILL.md` に従う。ユーザーの明示的な依頼なしに全件同期、`publish`、ロック解除を行わない。
- 認証情報、個人情報、`Page.Template.GetModdUser()` が含む機微情報を出力または不用意にシリアライズしない。
- `.env` を直接読むのはユーザーが明示的に許可した場合だけとする。
- 既存の未コミット変更を取り消さず、依頼に関係のない変更を加えない。
- Windows と DevContainer の双方で作業できるよう、検索と編集には可能な限り VS Code のツールを使う。

