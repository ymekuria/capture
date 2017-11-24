require('dotenv').config();
const electron = require('electron');
const path = require('path');
const url = require('url');
const MainWindow = require('./app/MainWindow');
const CaptureTray = require('./app/CaptureTray');
const { app, BrowserWIndow, Tray, Menu, ipcMain, desktopCapturer } = electron;
const startUrl = require('./config/keys').startUrl;

let mainWindow;
let tray;

app.on('ready', () => {
  const iconPath = path.join(__dirname, './src/assets/capture_tray_icon.png');
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Record', type: 'radio' },
    { label: 'Stop', type: 'radio' }
  ]);

  console.log('Main window loading from: ', startUrl);
  mainWindow = new MainWindow(startUrl);

  tray = new CaptureTray(iconPath, contextMenu);
});

ipcMain.on('record:start', (event, stream) => {
  console.log('stream', stream);
})
