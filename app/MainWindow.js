const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(url) {
    this.loadURL(url);
    
  }

}
