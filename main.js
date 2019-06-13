const {app, BrowserWindow} = require('electron');
let win;

function createWindow(){
  win = new BrowserWindow({
    width: 600, 
    height: 600,
    backgroundColor: '#111111',
    icon: `file://${__dirname}/dist/assets/logo/logo.png`
  });
  // win.loadURL('http://github.com');
  win.loadURL(`file://${__dirname}/dist/index.html`)
  win.on('closed', ()=> win=null);  
}

app.on('ready', createWindow);
app.on('window-all-closed',()=>{
  if(process.platform!=='darwin'){  app.quit();}
})
app.on('activate', function(){
  if(win===null){ createWindow();};
});