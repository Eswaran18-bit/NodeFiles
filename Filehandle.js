const fs = require('node:fs');
const path = require('path');
//read the file in js
fs.readFile(path.join(__dirname,'File','Content.txt'),'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

fs.writeFile(path.join(__dirname,'File','subscribe.txt'),'hello Views welcome back', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('write Completed Successfully');

  fs.appendFile(path.join(__dirname,'File','subscribe.txt'),'\n\\nthanks for subscribe', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Append Completed Successfully');
  });

  fs.rename(path.join(__dirname,'File','subscribe.txt'),path.join(__dirname,'File','thanks.txt'), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('removed Completed Successfully');
  });
});


process.on('uncaughtException',err=>{
  console.error(`there was a error in ${err}`);
  process.exit(1);

});
