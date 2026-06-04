# Note Trainer su smartphone — Guida pratica

## Il problema
I browser mobili (Chrome, Safari) **bloccano l'accesso al microfono** se la pagina è servita via `http://` o aperta da file locale. Serve **HTTPS**. Questo è una restrizione di sicurezza del browser, non aggirabile via solo HTML/JS.

Hai 3 strade — dalla più semplice alla più potente.

---

## 🥇 Opzione A — GitHub Pages (consigliata, 5 minuti)

Hosting gratuito con HTTPS automatico. L'app diventa una **PWA installabile**: la metti nella home del telefono e si comporta come un'app nativa.

### Passi
1. Crea account su [github.com](https://github.com) se non ce l'hai
2. Crea un nuovo repo pubblico, es. `note-trainer`
3. Carica i 4 file della cartella `SOLO trainer/`:
   - `note-trainer.html`
   - `manifest.json`
   - `sw.js`
   - `icon.svg`
4. Vai in **Settings → Pages → Source: `main` / `(root)` → Save**
5. Dopo 1-2 minuti, l'URL è:
   `https://TUO-USERNAME.github.io/note-trainer/note-trainer.html`

### Installa come app sul telefono
1. Apri l'URL su **Chrome Android** (o Safari iOS)
2. Menu (⋮) → **"Aggiungi a schermata Home"** (o "Installa app")
3. Si crea un'icona — apre l'app a tutto schermo, mic funziona
4. **Funziona anche offline** (service worker abilitato)

---

## 🥈 Opzione B — APK Android via PWABuilder (2 minuti, gratis)

Da una PWA hostata su HTTPS (es. dopo l'Opzione A) puoi generare un APK installabile direttamente, senza Android Studio.

### Passi
1. Completa prima l'Opzione A (app live su HTTPS)
2. Vai su [pwabuilder.com](https://www.pwabuilder.com/)
3. Incolla l'URL della tua PWA
4. Clicca **"Package for Stores"** → **Android**
5. Scarica il `.apk` (o `.aab`) generato
6. Trasferiscilo sul telefono e installa (devi abilitare "origini sconosciute" in Impostazioni → Sicurezza)

L'APK è un wrapper minimale che apre la PWA in WebView con tutti i permessi nativi richiesti — incluso microfono — già autorizzati a livello di app.

---

## 🥉 Opzione C — APK locale con Capacitor (avanzato)

Per chi vuole il controllo totale: APK firmato, brandizzato, offline-first via Capacitor.

### Prerequisiti
- Node.js (https://nodejs.org)
- Android Studio (https://developer.android.com/studio)
- JDK 17+

### Setup (eseguire nella cartella `SOLO trainer/`)
```bash
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Note Trainer" "com.marco.notetrainer" --web-dir=.
npx cap add android
```

Poi modifica `capacitor.config.json` per puntare a `note-trainer.html` come entry, oppure rinomina temporaneamente in `index.html`.

```bash
npx cap copy
npx cap open android
```

Da Android Studio: **Build → Build Bundle(s) / APK(s) → Build APK(s)** → trovi l'APK in `android/app/build/outputs/apk/debug/`.

---

## Cosa NON serve fare
- ❌ Non serve cambiare il codice
- ❌ Non serve pagare hosting
- ❌ Non serve pubblicare su Play Store (puoi installare APK direttamente)

## Note tecniche
- L'app è già configurata come PWA: `manifest.json`, service worker, theme color, icone, viewport mobile.
- Funziona offline una volta installata: il service worker fa cache di tutto.
- Su iOS, Safari ha qualche limite sui PWA — meglio testare prima.
- Il permesso microfono va concesso **una volta sola** all'installazione/primo avvio.

## Verifica installazione PWA
Apri DevTools (Chrome desktop) → tab **Application** → **Manifest** e **Service Workers** devono mostrare tutto verde.
