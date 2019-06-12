const {app, BrowserWindow} = require('electron');
let win;

function createWindow(){
  win = new BrowserWindow({
    width: 500,
    height: 500,
    backgroundColor: '#ffffff'
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