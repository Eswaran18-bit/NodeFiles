const fs = require('fs')
const path = require('path')
const rs = fs.createReadStream(path.join('File','BigFile.txt'),{encoding:'utf-8'})
const ws = fs.createWriteStream(path.join('File','New_bigFile.txt'))

/* rs.on('data',(datachuck)=>{
    ws.write(datachuck);
}) */
rs.pipe(ws)

process.on('uncaughtException',err=>{
    console.error(`there was a error in ${err}`);
    process.exit(1);
  
  });