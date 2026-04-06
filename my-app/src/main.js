import { app, BrowserWindow } from 'electron/main';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080
  })

  win.loadFile('http://127.0.0.1:5173')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})