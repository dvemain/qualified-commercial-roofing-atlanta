@echo off
cd /d "%~dp0"
where node >nul 2>nul || (echo Node.js is not installed. Get it from https://nodejs.org then re-run. & pause & exit /b 1)
if not exist node_modules\@rolldown\binding-win32-x64-msvc\package.json (
  echo Installing dependencies...
  call npm install --no-audit --no-fund
)
if not exist public\img\hero*.jpg (
  echo Downloading photos...
  powershell -NoProfile -ExecutionPolicy Bypass -File get-images.ps1
)
echo.
echo Starting on http://localhost:5173  (Ctrl+C to stop)
call npm run dev
pause
