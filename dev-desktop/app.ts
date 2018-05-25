/*
*   NovaEngine - Dev Dektop - App
*   author: Aurélien Dupays Dexemple
*/

import { app, BrowserWindow, Menu }                             from 'electron';
import { serverPort }                                           from '../config/env';

function createDesktopWindow(): BrowserWindow {
    return new BrowserWindow({
        width: 1600, height: 1200,
        show: false,
        title: 'Nova Engine',
        webPreferences: {
            experimentalFeatures: true,
            webgl: true,
            webSecurity: false
        }
    });
}

let mainDesktopWindow: BrowserWindow = null;

app.setName('Nova Engine');

app.on('ready', () => {
    mainDesktopWindow = createDesktopWindow();

    mainDesktopWindow.maximize();
    mainDesktopWindow.show();

    mainDesktopWindow.loadURL(`http://localhost:${serverPort}/`);

    mainDesktopWindow.on('closed', () => {
        mainDesktopWindow = null;
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
