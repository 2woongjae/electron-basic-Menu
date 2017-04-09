const {app, BrowserWindow, Menu} = require('electron');

let win = null;
const template = [
    {
        label: 'first',
        submenu: [
            {
                label: 'first1',
                click: () => {
                    console.log('first1 click');
                }
            }
        ]
    },
    {
        label: 'second',
        submenu: [
            {
                label: 'second1',
                click() {
                    console.log('second1 click');
                }
            }
        ]
    }
];

app.on('ready', () => {
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    console.log(Menu.getApplicationMenu());

    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);
});