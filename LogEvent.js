const {format} = require('date-fns'); //this package used to use the date function 
const {v4:uuid} = require('uuid');

const fs = require('fs');
const fspromises = require('fs').promises
const path = require('path');

const logEvent = async (message) =>{
    const dateTime = `${format(new Date),"DDMMYYYY\tHH:MM:SS"}`;
    const logTime = `${dateTime}\t${uuid}\t${message}`;

    try{
        await fspromises(fs.appendFile(path.join(__dirname,'Logs','EventFileLog.txt'),logTime))
    }catch(err) {
        throw err;
        console.log(err);
    }
}
module.exports.logEvent;
