const { app, BrowserWindow } = require('electron');//imports funcnlty from Electron
//app manages the applications's lifecycle.
//BrowserWindow creates desktop windows.
const path = require('path');
//path is a Node.js module for wokring with file paths.

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 720, minWidth: 640, minHeight: 360,
    backgroundColor: '#04060c', title: 'Rift Runner',
    webPreferences: //control how JavaScript runs inside your Electron window.
    {
      preload: path.join(__dirname, 'preload.js'),//__dirname gives the path of the folder containing the current JavaScript file.
      contextIsolation: true, nodeIntegration: false, sandbox: true
      // cI : Keeps the webpage's JavaScript separate from the preload script's JavaScript environment.
      //sandbox: It limits the capabilities available to the webpage, improving security.
    }
  });
  win.setMenuBarVisibility(false);//hide the menu bar.
  win.loadFile('index.html');
  // auto-reload if the renderer ever crashes
  win.webContents.on('render-process-gone', () => win.reload());//If the webpage process crashes, win.webCon...00 attempts to reload it.
}
app.whenReady().then(createWindow);//app : elec applic
//whenReady() returns a Promise that resolved when Electron is ready.
//.then(createWindow) tells Electron to call createWindow after it is ready.

//If the operating system is not macOS, quit the application when all windows are closed.
app.on('window-all-closed', () => { if (process.platform !== 'darwin')
  //darwin : platform name for macOS
  app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });//for mac

//Windows: When you close the last window, the application usually exits.
// macOS: When you close the last window, the application can remain running. You can reopen its window by clicking the app icon again.


/*main.js : creates the desktop window for RiftRunner,
load the game , and handle 
what happens when the window closes or crashes*/