// ═══════════════════════════════════════════════════════════
//  Note Trainer · Desktop wrapper (Electron)
//  Carica la versione LIVE da Netlify. Ogni aggiornamento del sito
//  diventa subito disponibile nell'app, senza ricompilare l'EXE.
// ═══════════════════════════════════════════════════════════
const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('path');

// 👇 URL della tua app online (GitHub Pages). Cambia qui se la sposti altrove.
const APP_URL = process.env.APP_URL || 'https://chopper090.github.io/note-trainer/';
// Fallback offline (se mai vuoi un index.html locale di emergenza)
const OFFLINE_FALLBACK = path.join(__dirname, 'offline.html');

let mainWindow = null;

function createWindow() {
  // Rispetta max 21:9 (ultrawide). Sotto, usa 16:9 standard finestrato.
  const ASPECT_MAX_W = 21, ASPECT_MAX_H = 9;
  // Dimensioni iniziali ragionevoli
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#15171C',
    title: 'Note Trainer',
    icon: path.join(__dirname, process.platform === 'win32' ? 'icon.ico' : 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
      // Permetti microfono per la pitch detection
      webSecurity: true,
    },
  });

  // Vincolo aspect ratio max 21:9 (su resize, il sistema mantiene rapporto sotto la soglia)
  mainWindow.on('resize', () => {
    const [w, h] = mainWindow.getSize();
    const currentRatio = w / h;
    const maxRatio = ASPECT_MAX_W / ASPECT_MAX_H;
    if (currentRatio > maxRatio) {
      // Larghezza eccessiva → cap alla 21:9
      mainWindow.setSize(Math.round(h * maxRatio), h);
    }
  });

  // Microfono / audio permission
  mainWindow.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'media') callback(true);
    else callback(false);
  });

  // Apre link esterni nel browser di sistema (es. solotrainer.app)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith(APP_URL)) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  // Carica la versione live
  mainWindow.loadURL(APP_URL).catch(err => {
    dialog.showMessageBox(mainWindow, {
      type: 'warning',
      title: 'Connessione fallita',
      message: 'Impossibile caricare la versione online di Note Trainer.\n\nControlla la connessione internet e riprova.',
      detail: String(err.message || err),
      buttons: ['Riprova', 'Chiudi'],
    }).then(r => {
      if (r.response === 0) mainWindow.loadURL(APP_URL).catch(() => {});
      else app.quit();
    });
  });

  // Menu minimale (utile per debug e refresh)
  const isMac = process.platform === 'darwin';
  const template = [
    {
      label: 'File',
      submenu: [
        { label: 'Ricarica', accelerator: 'CmdOrCtrl+R', click: () => mainWindow.reload() },
        { label: 'Ricarica (forza cache)', accelerator: 'CmdOrCtrl+Shift+R', click: () => mainWindow.webContents.reloadIgnoringCache() },
        { type: 'separator' },
        { role: isMac ? 'close' : 'quit' },
      ],
    },
    {
      label: 'Vista',
      submenu: [
        { role: 'togglefullscreen' },
        { label: 'Aumenta zoom', accelerator: 'CmdOrCtrl+=', click: () => { mainWindow.webContents.setZoomLevel(mainWindow.webContents.getZoomLevel() + 1); } },
        { label: 'Diminuisci zoom', accelerator: 'CmdOrCtrl+-', click: () => { mainWindow.webContents.setZoomLevel(mainWindow.webContents.getZoomLevel() - 1); } },
        { label: 'Reset zoom', accelerator: 'CmdOrCtrl+0', click: () => { mainWindow.webContents.setZoomLevel(0); } },
      ],
    },
    {
      label: 'Sviluppo',
      submenu: [
        { label: 'DevTools', accelerator: 'F12', click: () => mainWindow.webContents.toggleDevTools() },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
