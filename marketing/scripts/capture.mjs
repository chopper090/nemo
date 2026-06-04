// capture.mjs — cattura screenshot reali dell'app Nemo per il materiale marketing.
// Genera PNG in marketing/assets/<schermata>-<desktop|mobile>.png
//
// Uso (una tantum):
//   mkdir nemo-shots && cd nemo-shots && npm init -y && npm i playwright && npx playwright install chromium
//   node capture.mjs            (esegui da una cartella dove "playwright" è installato)
//
// Cattura il sito LIVE (v2.02.00). Dark mode. Desktop = layout 16:9, Mobile = layout 9:16.

import { chromium } from 'playwright';
import path from 'path';

const URL = 'https://chopper090.github.io/note-trainer/';
const OUT = 'C:/Users/marco/OneDrive/0. AI/CLAUDE/Chitarra/SOLO trainer/marketing/assets';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Desktop -> immagine ~1920x1080 (layout desktop, width >720)
// Mobile  -> immagine ~1170x2532 (layout mobile, width 390 < 720)
const FORMATS = {
  desktop: { viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1.5 },
  mobile:  { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 },
};

async function dismissIntro(page) {
  try {
    const skip = page.locator('#introSkip');
    if (await skip.isVisible({ timeout: 3000 })) { await skip.click(); await sleep(500); }
  } catch (_) {}
}

const SHOTS = [
  // L'intro/onboarding: la lasciamo visibile (è una bella schermata "scegli da dove partire")
  { name: 'intro', keepIntro: true, run: async () => { await sleep(900); } },
  // Home / header con logo, vista Pratica di default
  { name: 'home', run: async (page) => { await dismissIntro(page); await sleep(700); } },
  // Lick — fiore all'occhiello (tablatura + manico). Selezioniamo un lick blues.
  { name: 'lick', run: async (page) => {
      await dismissIntro(page);
      await page.click('#btnLick'); await sleep(800);
      try { await page.click('.lk-list-item[data-lick="blues-bb-box"]', { timeout: 3000 }); }
      catch (_) { try { await page.click('.lk-list-item', { timeout: 2000 }); } catch (_) {} }
      await sleep(800);
    } },
  // Tuner
  { name: 'tune', run: async (page) => { await dismissIntro(page); await page.click('#btnTuner'); await sleep(1000); } },
  // Solo mode (focus minimale)
  { name: 'solo', run: async (page) => { await dismissIntro(page); await page.click('#btnSolo'); await sleep(1000); } },
  // Teoria (quiz)
  { name: 'theory', run: async (page) => { await dismissIntro(page); await page.click('.viewtab[data-view="theory"]'); await sleep(800); } },
  // Stats / mastery polygon
  { name: 'stats', run: async (page) => { await dismissIntro(page); await page.click('.viewtab[data-view="stats"]'); await sleep(1000); } },
  // Apprendi (lezioni)
  { name: 'learn', run: async (page) => { await dismissIntro(page); await page.click('.viewtab[data-view="learn"]'); await sleep(800); } },
];

const browser = await chromium.launch();
let ok = 0, fail = 0;
for (const [fmt, cfg] of Object.entries(FORMATS)) {
  for (const shot of SHOTS) {
    const context = await browser.newContext({ ...cfg, colorScheme: 'dark', permissions: ['microphone'], reducedMotion: 'reduce' });
    const page = await context.newPage();
    try {
      await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await sleep(1800); // render + font
      await shot.run(page, fmt);
      const file = path.join(OUT, `${shot.name}-${fmt}.png`);
      await page.screenshot({ path: file });
      console.log('OK  ', `${shot.name}-${fmt}`);
      ok++;
    } catch (e) {
      console.log('FAIL', `${shot.name}-${fmt}`, String(e.message).slice(0, 90));
      fail++;
    }
    await context.close();
  }
}
await browser.close();
console.log(`DONE — ${ok} ok, ${fail} falliti`);
