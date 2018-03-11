// Controla el ciclo de vida de los eventos de su aplicación.
const {app} = require('electron')
// Crea y controla las ventanas del navegador.
const {BrowserWindow} = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 550,
        heigth: 700,
        center: true,
        maximizable: false,
        title: 'Exprexxion',
        show: false
    })

    // Para hacer que la ventana aparezca sin fogonazos.
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    // Para garantizar que los URLs del archivo estén adecuadamente formateados.
    let url = require('url').format({
        protocol: 'file',
        slashes: true,
        pathname: require('path').join(__dirname, 'index.html')
    })
    // Carga un archivo local.
    mainWindow.loadURL(url)
})

// Salir de la aplicación cuando la última ventana está cerrada.
app.on('window-all-closed', () => {
    app.quit()
})