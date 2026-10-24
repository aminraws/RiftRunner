// Bridge: exposes only what the game needs (nothing sensitive).
const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('riftApp', { name: 'Rift Runner', platform: process.platform });
