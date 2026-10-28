# One-time: downloads the free-license Unsplash photos into public\img\ and dist\img\
$dir = Join-Path $PSScriptRoot "public\img"
Get-Content (Join-Path $dir "images.txt") | ForEach-Object {
  $f,$u = $_ -split "`t"; if (-not $f) { return }
  Write-Host "  $f"; Invoke-WebRequest -UseBasicParsing -Uri $u -OutFile (Join-Path $dir $f)
}
$dist = Join-Path $PSScriptRoot "dist\img"
New-Item -ItemType Directory -Force $dist | Out-Null
Copy-Item (Join-Path $dir "*.jpg") $dist -Force
Write-Host "done"
