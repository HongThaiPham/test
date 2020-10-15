const electron = require("electron");
const { app, Menu } = electron;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const isMac = process.platform === "darwin";

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 750,
    height: 400,
    resizable: false,
    // autoHideMenuBar: true,
    frame: false,
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
