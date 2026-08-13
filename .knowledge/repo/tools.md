# Tools

## Sync Script (`sync.ts`)

This script synchronizes local template files with the Commerble EC PaaS API. It handles validation, uploads, and file watching.

AI agents should refer to the `cbsync` skill.

### Prerequisites

*   Node.js must be installed.
*   Dependencies must be installed (`npm install` or `yarn install`).
    *   `chokidar`
    *   `dotenv`

### Configuration

Create a `.env` file in the root directory with the following keys.

```properties
CBAPI_ENDPOINT=https://api.example.invalid/odata
CBAPI_USERNAME=your_username
CBAPI_PASSWORD=your_password
# Optional: Force uploads even when templates are locked (use with caution)
# CBSYNC_FORCE_UPLOAD_ALL=1
```

The `sync.ts` script also defines an internal `config` object near the top with the following settings.
*   `templateDirPath`: Directory containing templates (default: `./templates`).
*   `mailTemplatePrefix`: Mail template prefix (default: `Mail`).
*   `mailSharedTemplatePath`: Path to the pseudo-shared template concatenated to the beginning of each mail template (example: `./templates/Mail/SharedFunctions.cshtml`).
*   `sharedTemplates`: List of shared templates (example: `ModdSharedFunctions`).
*   `ignoreTemplates`: List of templates to skip.
*   `useLockMode`: Enables the lock mechanism to prevent changes from other branches from being overwritten (default: `false`).

### Usage

You can also run the script through the npm tasks defined in `package.json`.

```bash
# Watch for changes and upload automatically
npm run upload:watch

# Upload all templates
npm run upload:all

# Upload specified template files
npm run upload <...files>

# Run the REST API with authentication
npm run rest <method> <path> [bodyJson]

# Build files and upload all templates
npm run publish

# Build files and run upload in watch mode concurrently
npm start
```

You can also run the script directly with Node.js in one of the following modes.

```bash
node sync.ts <cmd> [args]
```

#### Subcommands

1.  **`all`**
    *   Uploads all templates in `templateDirPath`.
    *   Validates templates before uploading.
    *   Checks locks when `useLockMode` is enabled.
    *   **Command:** `node sync.ts all`

2.  **`watch`**
    *   Watches for changes to files in `templateDirPath`.
    *   Automatically validates and uploads changed files.
    *   Reloads shared templates when a dependency file changes.
    *   **Command:** `node sync.ts watch`

3.  **`unlock`**
    *   Removes the lock phrase from and uploads the specified files.
    *   Use when `useLockMode` is enabled.
    *   **Command:** `node sync.ts unlock <path/to/file1> <path/to/file2> ...`

4.  **`upload`**
    *   Uploads the specified files with their locks.
    *   Validates templates before uploading.
    *   **Command:** `node sync.ts upload <path/to/file1> <path/to/file2> ...`

5.  **`rest`**
    *   Sends a REST request to any Commerble Web API path using the authentication settings in `.env`.
    *   Displays the HTTP status, `Content-Type`, and response body on standard output without running synchronization.
    *   When a JSON string is passed as the third argument, it is sent as the request body with a `Content-Type: json` header.
    *   For AI agents parsing the output, `node sync.ts rest ...` is recommended over `npm run rest ...` to avoid npm startup messages.
    *   **Command:** `node sync.ts rest <method> <path> [bodyJson]`

    Example:

    ```pwsh
    node .\sync.ts rest get /meta/Templates?`$top=1
    ```


### Lock Mode (`useLockMode: true`)

When enabled in `config`, the script adds safety checks.
*   Verifies whether the current Git branch is the default branch (for example, `main`).
*   Prevents uploads when the local `main` branch is outdated or has unmerged changes.
*   Adds a lock phrase (comment) to the beginning of template content during upload to indicate which branch holds the lock.
