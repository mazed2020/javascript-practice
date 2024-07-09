// learning new thing command line(mv=rename file or directory)

const port=5000;
const http=require('http');
// const path=require('path');
// const os=require('os');
// const url=require('url');
// console.log(url)
// console.log(path.basename("./temp/api/index.js"));
const server=http.createServer(function(req,res){
    if(req.url==='/'){
        res.end('your are write please dont wire about that');
    }
    if(req.url==='/login'){
        res.end('change home page to login page')
    }

}).listen(port,()=>{
    console.log(`server is running: https://localhost:${port}`);
})