# Prompt per Gemini — clip video (Veo) e immagini (Imagen)

Le clip Veo servono per le parti **cinematografiche** (gancio iniziale, stacchi, chiusura): rendono il video moderno e accattivante. **Veo NON sa disegnare l'interfaccia vera di Nemo né testo/logo affidabili** → l'interfaccia viene dagli screenshot, e **logo + URL vanno sovrapposti in montaggio** (file in `assets/`).

Dove: Gemini app (gemini.google.com) con Veo, o Google **Flow** (labs.google/flow), o Vertex AI. Veo genera clip brevi (~8s).

---

## 🎨 BLOCCO STILE (incolla in coda a ogni prompt Veo/Imagen)
> Style: modern, sleek, premium tech aesthetic. Soft neon glow on a dark background. Brand palette: deep violet `#5840D7`, gradient cyan `#00D4FF` → violet → magenta `#E94CC8`, gold accent `#FFB800`, near-black UI background `#15171C`. Clean, minimal, cinematic, shallow depth of field, subtle film grain, smooth motion. No text, no logos, no watermarks, no UI screenshots, no distorted hands or fingers.

---

## 🎬 Clip Veo

### VEO-intro — il gancio (≈8s)
**Prompt:**
> Macro shot of a glowing audio waveform pulsing in the dark; the waveform smoothly morphs into the strings and frets of a neon guitar fretboard, dots of light igniting on the frets in sync with a soft pulse. Camera slowly pushes in. Cinematic, futuristic, elegant. [+ BLOCCO STILE]
- **9:16:** aggiungi "vertical 9:16 composition, subject centered, space at top for a title".
- **16:9:** aggiungi "wide 16:9 cinematic composition".
- Audio (se Veo lo genera): "soft ambient synth swell with a single guitar note".

### VEO-hands — b-roll emozionale (≈8s)
**Prompt:**
> Close-up of hands playing an acoustic guitar in a dimly lit room, warm rim light, shallow depth of field, fingers moving on the fretboard, dust particles floating in a soft beam of light. Intimate, inspiring, cinematic slow motion. [+ BLOCCO STILE — qui ammorbidisci: keep natural warm tones with a subtle violet rim light]
- **9:16:** "vertical, hands and fretboard centered". **16:9:** "wide, room ambiance visible".

### VEO-wave — stacco astratto (≈8s)
**Prompt:**
> Abstract vibrating guitar strings shedding ripples of cyan-to-magenta light that spread like sound waves across a dark void, particles of light dancing to an invisible rhythm. Hypnotic, premium, looping feel. [+ BLOCCO STILE]
- Usalo come transizione di 1-2s tra gli screenshot.

### VEO-outro — chiusura (≈8s)
**Prompt:**
> A dark elegant background with a soft violet-to-magenta gradient glow pulsing gently from the center, subtle light particles, clean empty negative space in the middle for a logo to be placed. Calm, premium, modern. [+ BLOCCO STILE]
- In **montaggio** sovrapponi `assets/logo-nemo-512.png` (o `logo-nemo-con-nome.png`) al centro + testo **chopper090.github.io/note-trainer** + "Provala gratis".

> Suggerimento: se una clip non ti soddisfa, rigenera variando una sola cosa (camera move, intensità del neon). Tieni 2-3 varianti per scegliere in montaggio.

---

## 🖼️ Immagini (Imagen, dentro Gemini)

### IMG-thumb — copertina YouTube (16:9)
> A bold, modern thumbnail on a dark background with a soft violet-magenta neon glow. A glowing neon guitar fretboard with light dots, and a stylized soundwave. Premium tech vibe, high contrast, lots of clean negative space on the left for a headline. No text, no logo. 16:9. [+ BLOCCO STILE]
- In montaggio aggiungi headline grande (es. **"LA CHITARRA CHE TI ASCOLTA"**) + logo.

### IMG-social — card quadrata / storia (1:1 o 9:16)
> A clean promotional graphic, dark premium background with violet-magenta neon gradient, a minimal neon guitar fretboard motif and a subtle sound-wave, empty centered space for a logo and a short tagline. No text. [+ BLOCCO STILE]

### IMG-feature (opzionale) — icone benefici
> A set of 3 minimal glowing line icons on a dark background, violet-magenta neon: a microphone with sound waves, a guitar fretboard with a highlighted dot, an upward progress chart. Consistent flat neon style, transparent-friendly. [+ BLOCCO STILE]

---

## 📐 Promemoria formati & montaggio
- Genera (o riformatta) ogni clip sia **9:16** che **16:9** se pubblichi su più canali.
- Ordine tipico: `VEO-intro` (gancio) → screenshot/screen-rec dell'app (la sostanza) → `VEO-wave` come stacco → `VEO-outro` + logo + URL.
- **Coerenza:** stessa palette ovunque; il logo Nemo (oro su violetto) è l'ancora visiva.
- **Non** affidare a Veo testi o il logo: scrivili/incollali tu in CapCut con i file di `assets/`.
