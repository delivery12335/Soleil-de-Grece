@echo off
cd /d "%~dp0"

if not exist node_modules (
  echo Installing dependencies...
  call npm ci
  if errorlevel 1 exit /b 1
)

start "Soleil de Grace" /b cmd /c "npm run dev -- --host 127.0.0.1 --port 5187 --strictPort"
timeout /t 3 >nul
start http://127.0.0.1:5187/
