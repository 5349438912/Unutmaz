@echo off
chcp 65001 >nul
echo ============================================
echo  SIGNAL FILES - Video Indirici
echo  Hedef: Documents\Youtube-kanal-2
echo ============================================
cd /d "%USERPROFILE%\Documents\Youtube-kanal-2" || (echo HATA: Klasor bulunamadi & pause & exit /b 1)

mkdir "2026-10-18-video1-alphafold" 2>nul
mkdir "2026-10-19-video2-iss-water" 2>nul

echo.
echo [1/2] Video 1 indiriliyor (AlphaFold, ~30 MB)...
curl -L --retry 3 -o "2026-10-18-video1-alphafold\signal-files-01-alphafold.mp4" "https://d2ol7oe51mr4n9.cloudfront.net/user_3Fj20pLlc1IpEhDv4P4uxDyMA4y/fa0a3e5b-a95a-4fc5-a12e-831db7083f46.mp4"

echo.
echo [2/2] Video 2 indiriliyor (ISS Water, ~40 MB)...
curl -L --retry 3 -o "2026-10-19-video2-iss-water\signal-files-02-iss-water.mp4" "https://d2ol7oe51mr4n9.cloudfront.net/user_3Fj20pLlc1IpEhDv4P4uxDyMA4y/5ff8ab34-cf1a-4daf-9171-5894a092f58d.mp4"

echo.
echo ============================================
echo  TAMAMLANDI! Videolar klasorlerinde.
echo ============================================
dir /b /s *.mp4
pause
