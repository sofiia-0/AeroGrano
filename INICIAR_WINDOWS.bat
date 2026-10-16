@echo off
cd /d "%~dp0"
echo Iniciando AeroGrano Rural...
start "" "http://localhost:4173"
node server.js
pause
