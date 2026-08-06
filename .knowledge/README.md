# .knowledge

`.knowledge` は、このリポジトリで作業する際に参照する知識ベースです。

## 構成

### `common/`
Commerble テンプレート全般で使う汎用知識を格納します。

例:

* `razor.md`
* `template--front.md`
* `template--mail.md`
* `template--custom-query.md`
* `template-helpers.md`
* `metadata--ec.xml`
* `metadata--meta.xml`

### `tenant/`
テナント固有の仕様や CMS 依存の知識を格納します。

例:

* `metadata--cms.xml`
* `cms-*`

### `repo/`
このリポジトリ固有の運用知識やローカル確認手順を格納します。

例:

* `tools.md`
* `browse.md`
* `coding-rules.md`

## 参照の目安

1. まず `repo/` を見て、このリポジトリの運用ルールを確認する
2. 次に `common/` を見て、テンプレートや Razor の共通仕様を確認する
3. テナント依存の要件がある場合だけ `tenant/` を確認する

## 追加ルール

* 複数案件で再利用できる内容は `common/` に置く
* 特定テナントに閉じる内容は `tenant/` に置く
* このスターターキット固有の手順やローカル確認方法は `repo/` に置く