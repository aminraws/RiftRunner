//ELCTRON APPLic Preload script
// Bridge: exposes only what the game needs (nothing sensitive).
const { contextBridge } = require('electron');
//contextBridge : It lets us safely expose selected information or functions to the frontend game.

contextBridge.exposeInMainWorld('riftApp', { name: 'Rift Runner', platform: process.platform });
//process.platform :This tells the game which operating system is running the application.
//win32 , darwin ,linux
