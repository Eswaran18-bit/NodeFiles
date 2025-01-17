const http = require('http');
const PORT = 3000;
const fs = require('fs');
const server = http.createServer((req,resp)=>{
    fstat.readFile('index.html',(data,err)=>{
        if(err) {
            resp.writeHead(404);
            resp.write("Page Not Found");
        }else {
            resp.write(data);
        }
    })
    resp.end();
});

server.listen(PORT,(err)=>{
    if(err) {
        console.log(err)
    } else {
        console.log("Server is running in "+ PORT);
    }
});
