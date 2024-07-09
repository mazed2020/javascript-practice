// learning new thing command line(mv=rename file or directory)

const port=5000;
const http=require('http');
const server=http.createServer(function(req,res){
    res.end("hello i am resposing here route please don to desturb me more")

}).listen(port,()=>{
    console.log(`server is running: https://localhost:${port}`);
})