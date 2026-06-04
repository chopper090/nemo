# Icone NEMO — due set selezionabili

Due loghi pronti per il deploy. **A1 è il default** (attualmente copiato nella root).

| Set | Logo | Sfondo | Quando usarlo |
|-----|------|--------|---------------|
| **a1** | "N" monogramma + corda vibrante oro | viola brand | Default — pulito, leggibile a ogni dimensione |
| **c4** | Waveform a forma di "N" + nota | dark | Alternativa tech/audio |

## Contenuto di ogni cartella

```
icons/<set>/
  icon.svg                  sorgente vettoriale (angoli arrotondati, "any")
  icon-maskable.svg         sorgente vettoriale full-bleed (PWA "maskable")
  icon-192.png              192×192  — PWA "any"
  icon-512.png              512×512  — PWA "any"
  icon-192-maskable.png     192×192  — PWA "maskable" (safe-zone rispettata)
  icon-512-maskable.png     512×512  — PWA "maskable"
```

I nomi file combaciano con quelli referenziati da `manifest.json` e `index.html`.

## Cambiare set per il deploy

Dalla root del progetto:

```powershell
# logo "N" (default)
./icons/use-icon-set.ps1 -Set a1

# logo waveform
./icons/use-icon-set.ps1 -Set c4
```

Lo script copia i 5 file (`icon.svg` + 4 PNG) nella root. Netlify pubblica la root,
quindi dopo lo swap basta ridistribuire — nessun'altra modifica necessaria.

## Rigenerare i PNG dagli SVG

I PNG sono prodotti dagli `.svg` con [sharp](https://sharp.pixelplumbing.com/).
Se modifichi un SVG, rigenera con uno script Node che fa:
`sharp(svgBuffer, { density: 512 }).resize(size, size).png().toFile(out)`
per ogni combinazione set × variante × {192, 512}.

> Nota: `manifest.json` ha `theme_color: #5840D7` (viola), intonato ad **a1**.
> Se rendi `c4` permanente puoi valutare un theme color più scuro.
