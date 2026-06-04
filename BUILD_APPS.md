# Build Apps · APK + EXE

> Strategia: app wrapper che caricano `index.html` LIVE da hosting statico.
> Aggiornamento normale = solo push sul repo, nessun rebuild app necessario.
> Rebuild app serve SOLO se cambi: icona, nome, packageId, orientamento, dominio.

## 🌐 Hosting consigliato: GitHub Pages (gratis, illimitato)

URL attuale dell'app: `https://chopper090.github.io/note-trainer/`

**Procedura update**: modifichi `index.html` → commit + push su `main` → online in ~30 secondi.

Alternative gratuite valide: Cloudflare Pages, Surge.sh, Vercel.

## 📱 APK Android (9:16 portrait)

### Opzione A — PWABuilder (più semplice, niente CLI)

1. Vai su <https://www.pwabuilder.com/>
2. Incolla `https://note-trainer.netlify.app`
3. Clicca **Android Package** → seleziona **TWA (Trusted Web Activity)**
4. Compila:
   - Package ID: `com.marco.notetrainer`
   - App name: `Note Trainer`
   - Display mode: `standalone`
   - Orientation: `portrait`
   - Theme color: `#15171C`
5. Scarica lo ZIP → contiene `app-release-signed.apk` pronto
6. Trasferisci l'APK sul telefono via USB / Telegram / Drive → installa

**Aggiornamenti automatici**: il TWA carica sempre la versione live → aggiorna Netlify, l'app si aggiorna al prossimo apertura.

**Rebuild APK serve solo per**: cambio icona, nome, packageId.

### Opzione B — Bubblewrap CLI (controllo totale)

```bash
# Una volta sola
npm install -g @bubblewrap/cli

# Genera il progetto Android dal manifest
cd "SOLO trainer/mobile-app"
bubblewrap init --manifest ../manifest.json
# Usa il twa-manifest.json già presente come riferimento per i parametri

# Genera la chiave di firma (una volta)
bubblewrap build  # creerà android.keystore al primo build

# Build APK
bubblewrap build

# Output: ./app-release-signed.apk
```

Verifica con `adb install app-release-signed.apk` (telefono in Developer Mode + USB).

### Verifica TWA (asset link verification)

Per evitare la barra URL nell'APK serve che il sito esponga `assetlinks.json`. Crea `SOLO trainer/.well-known/assetlinks.json`:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.marco.notetrainer",
    "sha256_cert_fingerprints": ["<SHA256 della tua keystore>"]
  }
}]
```

Per ottenere il SHA256:
```bash
keytool -list -v -keystore android.keystore -alias android
```

## 💻 EXE Desktop (max 21:9)

### Setup (una volta)

```bash
cd "SOLO trainer/desktop-app"
npm install
```

### Run in dev (test rapido)

```bash
npm start
```

Apre la finestra Electron che carica il sito live.

### Build EXE Windows

```bash
npm run build:win
```

Output in `dist/`:
- `Note Trainer Setup 1.0.0.exe` (installer NSIS)
- `Note Trainer 1.0.0.exe` (portable, no install)

### Build per altre piattaforme

```bash
npm run build:mac    # .dmg (richiede macOS host)
npm run build:linux  # .AppImage + .deb
```

### Caratteristiche dell'EXE

- Carica live `https://note-trainer.netlify.app`
- Vincolo aspect ratio massimo **21:9** (su resize: se vai più largo, l'app comprime ad aspetto 21:9)
- Min 800×600, default 1440×900
- Menu Italiano (File / Vista / Sviluppo)
- F12 DevTools, Ctrl+R reload, Ctrl+Shift+R hard reload
- Microfono autorizzato (per pitch detection)
- Link esterni si aprono nel browser sistema

## 🔄 Flusso di aggiornamento (l'idea chiave)

```
Tu modifichi index.html
        ↓
   Drag su Netlify  (zero crediti build, 30s)
        ↓
Service Worker invalida cache su tutti i client
        ↓
 PWA web + APK + EXE caricano nuova versione
   alla prossima apertura. Zero rebuild.
```

**Quando devi rifare APK / EXE:**
- Cambi icona dell'app → rebuild
- Cambi nome app o packageId → rebuild
- Cambi dominio Netlify → modifica config + rebuild
- Cambi orientamento (portrait/landscape) → rebuild
- **Tutto il resto (codice, lezioni, brani, polygon, badge, scale)** → NESSUN rebuild necessario, solo push Netlify

## 🚀 Roadmap sync cloud (futuro)

Quando vorremo che APK + EXE + Web condividano i dati tra device:

1. **Supabase free tier** (50k auth users, 500MB DB) — auth email/password + tabella `progress` con RLS per-utente
2. Sostituire `localStorage` con wrapper `cloudOrLocal(key)`:
   - Se logged in → sync con Supabase su ogni `saveProgress()`
   - Se offline → fallback localStorage + queue di sync alla riconnessione
3. **Conflict resolution**: timestamp + last-write-wins, oppure CRDT semplice (XP additive, badge union, completedLessons union)
4. UI: bottone "☁ Sign in" nella card Account
5. **Stessa codebase** per Web/APK/EXE → un solo endpoint Supabase serve tutto

Tempo stimato: 2-3 ore di lavoro tutto incluso, su qualunque codice tutto resta single-file HTML.

## 📋 Checklist veloce

- [ ] Dominio Netlify confermato
- [ ] `desktop-app/main.js` aggiornato con URL corretto
- [ ] `mobile-app/twa-manifest.json` aggiornato con host corretto
- [ ] Test PWA web: `https://<dominio>` apre senza errori
- [ ] PWABuilder genera APK senza errori
- [ ] `npm start` in `desktop-app/` apre finestra Electron correttamente
- [ ] `npm run build:win` genera EXE in `dist/`
- [ ] `.well-known/assetlinks.json` deployato (per TWA senza barra URL)
