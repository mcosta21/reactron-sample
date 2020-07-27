const { app, BrowserWindow, nativeImage } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
 
let mainWindow;
 
function createWindow() {

    const icon = nativeImage.createFromPath(`${app.getAppPath()}/public/favicon.ico`)

    if (app.dock) {
        app.dock.setIcon(icon)
      }

    mainWindow = new BrowserWindow({
        icon,
        minWidth: 1000,
        minHeight: 600,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
          }
    });
    
    const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
 
    mainWindow.loadURL(startURL);
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
app.on('ready', createWindow);