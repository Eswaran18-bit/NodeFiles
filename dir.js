const fs = require('fs');
if(fs.existsSync('./Newdir')){
    fs.rmdir('./Newdir',(err)=>{
        if(err) throw err;
        console.log("Directory removed")
    })
}else {
    console.log("already Exist")
}

/* if(!fs.existsSync('./NewDir2')) {
    fs.mkdir('./NewDir2',(err)=>{
        if(err) throw err;
        console.log("Directory Created");
    })
} */ 
//created the new directory 
