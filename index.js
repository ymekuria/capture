const electron = require('electron');
const path = require('path');
const MainWindow = require('./app/MainWindow');
const CaptureTray = require('./app/CaptureTray');
const { app, BrowserWIndow, Tray, Menu } = electron;

let mainWindow;
let tray;

app.on('ready', () => {
	const iconPath = path.join(__dirname, './src/assets/capture_tray_icon.png');
  const contextMenu = Menu.buildFromTemplate([
	  {label: 'Record', type: 'radio'},
	  {label: 'Stop', type: 'radio'},
	])
	// use the below once a build bundle is created
	// mainWindow.loadURL(`file://${__dirname}/public/index.html`);
	mainWindow = new MainWindow('http://localhost:3000');

	tray = new CaptureTray(iconPath, contextMenu);


});