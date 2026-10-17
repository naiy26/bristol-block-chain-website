@echo off
setlocal
cd /d "%~dp0"
set "BRISTOL_NODE=node"
where node >nul 2>nul
if errorlevel 1 (
  set "BRISTOL_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
  if not exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" (
    echo Node.js was not found. Install Node.js LTS, then reopen this script.
    pause
    exit /b 1
  )
  set "PATH=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;%PATH%"
)
if not exist "node_modules\next\dist\bin\next" (
  echo Project dependencies are missing. Install them with npm install first.
  pause
  exit /b 1
)
echo Open the Local URL printed below in your browser.
echo Keep this window open. Press Ctrl+C to stop the website.
"%BRISTOL_NODE%" node_modules\next\dist\bin\next dev
pause
