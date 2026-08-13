# .knowledge

`.knowledge` is the knowledge base to consult when working in this repository.

## Structure

### `common/`
Contains general knowledge used across Commerble templates.

Examples:

* `razor.md`
* `template--front.md`
* `template--mail.md`
* `template--custom-query.md`
* `template-helpers.md`
* `metadata--ec.xml`
* `metadata--meta.xml`

### `tenant/`
Contains tenant-specific specifications and CMS-dependent knowledge.

Examples:

* `metadata--cms.xml`
* `cms-*`

### `repo/`
Contains repository-specific operational knowledge and local verification procedures.

Examples:

* `tools.md`
* `browse.md`
* `coding-rules.md`

## Reference Order

1. First check `repo/` for the operational rules of this repository.
2. Next check `common/` for shared template and Razor specifications.
3. Check `tenant/` only when tenant-dependent requirements apply.

## Additional Rules

* Put content reusable across multiple projects in `common/`.
* Put content specific to a particular tenant in `tenant/`.
* Put procedures and local verification methods specific to this starter kit in `repo/`.