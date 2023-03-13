const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  keyTap: (key) => ipcRenderer.send('key-tap', key),
});
