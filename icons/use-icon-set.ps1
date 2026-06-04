<#
  use-icon-set.ps1 — attiva un set di icone copiandolo nella root del progetto.

  Uso:
    pwsh ./icons/use-icon-set.ps1 -Set a1     # logo "N" (default)
    pwsh ./icons/use-icon-set.ps1 -Set c4     # logo waveform

  Copia i 5 file referenziati da manifest.json e index.html nella root,
  così il deploy (Netlify) usa il set scelto senza altre modifiche.
#>
param(
  [Parameter(Mandatory = $true)]
  [ValidateSet('a1', 'c4')]
  [string]$Set
)

$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent          # cartella del progetto (parent di icons/)
$src  = Join-Path $PSScriptRoot $Set

$files = @(
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
  'icon-192-maskable.png',
  'icon-512-maskable.png'
)

Write-Host "Attivo set icone '$Set' ->" $root
foreach ($f in $files) {
  $from = Join-Path $src $f
  $to   = Join-Path $root $f
  if (-not (Test-Path $from)) { throw "File mancante: $from" }
  Copy-Item -Path $from -Destination $to -Force
  Write-Host ("  {0,-26} <-  icons/{1}/{0}" -f $f, $Set)
}
Write-Host "`nFatto. Set attivo: $Set."
