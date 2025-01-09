const fsPromises = require('fs').promises;
const path = require('path');

const filehandle = async() => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'File','Content.txt'),'utf-8');
        console.log(data);
        const append = await fsPromises.appendFile(path.join('File','Content.txt'),'Hello guys Welcome back');
        console.log("append SuccessFully");
        const renameeFile =  await fsPromises.rename(path.join(__dirname,'File','thanks.txt'),path.join(__dirname,'File','End.txt'));
        console.log("Renamed Successfully");
        await fsPromises.unlink(path.join(__dirname,'File','End.txt'));
        console.log("delete File");
    } catch (err) {
        console.error(err);
    }
}
filehandle();

