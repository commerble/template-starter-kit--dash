#!/usr/bin/env bash

set -eu

PORT="${CHROME_DEBUG_PORT:-9222}"
PROFILE_DIR="${CHROME_USER_DATA_DIR:-/tmp/chrome-devtools-mcp}"
LOG_FILE="${CHROME_LOG_FILE:-/tmp/chrome-devtools-mcp.log}"

if curl -fsS "http://127.0.0.1:${PORT}/json/version" >/dev/null 2>&1; then
    exit 0
fi

mkdir -p "${PROFILE_DIR}"

nohup google-chrome \
    --headless=new \
    --no-sandbox \
    --disable-gpu \
    --disable-dev-shm-usage \
    --no-first-run \
    --no-default-browser-check \
    --remote-debugging-port="${PORT}" \
    --remote-debugging-address=127.0.0.1 \
    --user-data-dir="${PROFILE_DIR}" \
    >"${LOG_FILE}" 2>&1 &

for _ in $(seq 1 20); do
    if curl -fsS "http://127.0.0.1:${PORT}/json/version" >/dev/null 2>&1; then
        exit 0
    fi

    sleep 1
done

echo "Failed to start headless Chrome for chrome-devtools-mcp. See ${LOG_FILE}." >&2
exit 1
