const {format} = require('date-fns'); //this package used to use the date function 
const {v4:uuid} = require('uuid');

const fs = require('fs');
const fspromises = require('fs').promises
const path = require('path');

const logEvent = async (message) =>{
    const dateTime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`; 
    const logTime = `${dateTime}\t${uuid()}\t${message}\n`;

    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fspromises.mkdir(path.join(__dirname,'logs'));
        }
        await fspromises.appendFile(path.join(__dirname,'Logs','EventFileLog.txt'),logTime)
    }catch(err) {
        console.log(err);
    }
}
module.exports={logEvent};