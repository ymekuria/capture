const electron = require('electron');
const path = require('path');
const MainWindow = require('./app/MainWindow');
const CaptureTray = require('./app/CaptureTray');
const { app, BrowserWIndow, Tray } = electron;

let mainWindow;
let tray;

app.on('ready', () => {
	const iconPath = path.join(__dirname, './src/assets/capture_tray_icon.png');

	// use the below once a build bundle is created
	// mainWindow.loadURL(`file://${__dirname}/public/index.html`);
	mainWindow = new MainWindow('http://localhost:3000');

	tray = new CaptureTray(iconPath);


});