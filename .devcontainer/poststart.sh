#!/bin/sh
# Headless Chromeをバックグラウンドで起動するスクリプト
google-chrome --headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage --no-first-run --no-default-browser-check --remote-debugging-port=9222 --remote-debugging-address=0.0.0.0 --user-data-dir=/tmp/chrome-devtools-mcp > /tmp/chrome.log 2>&1
