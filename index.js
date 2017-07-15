const electron = require('electron');
const path = require('path');
const { app } = electron;

let mainWindow;

app.on('ready', () => {
		// object passed into BrowserWIndow in used to set window 
		mainWindow = new BrowserWindow({
		});

		// use the below once a build bundle is created
		// mainWindow.loadURL(`file://${__dirname}/public/index.html`);
		mainWindow.loadURL('http://localhost:3000');

});