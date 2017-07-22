const electron = require('electron');
const path = require('path');
const MainWindow = require('./app/main_window');
const { app, BrowserWIndow, Tray } = electron;

let mainWindow;

app.on('ready', () => {
		// object passed into BrowserWIndow in used to set window 
		mainWindow = new MainWindow({
		});

		// use the below once a build bundle is created
		// mainWindow.loadURL(`file://${__dirname}/public/index.html`);
		mainWindow.loadURL('http://localhost:3000');

});