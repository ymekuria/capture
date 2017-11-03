const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(url) {
    super({
      webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/../preload.js'
      }
    });

    this.loadURL(url);
  }
}
module.exports = MainWindow;
