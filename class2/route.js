/**
 * respose head contain this thing
1.Status Code: 200
2.Status Message: 'OK'
3.Headers: { 'Content-Type': 'text/html',
 'Custom-Header': 'CustomValue'
 }
 */



const http=require('http');
const fs=require('fs');
const PORT=process.env.PORT ||3000;
const hostname='127.0.0.1';


const server=http.createServer((req,res)=>{
    if(req.url==='/') res.end("main page it is")
    // res.writeHead(200, 'okay', {
    //     'Content-Type': 'text/html',
    //     'Custom-Header': 'CustomValue'
    // });
    // res.write("set custom response head cearfully");
    // res.end();
    if(req.url=='/home'){
        fs.readFile('./views/home.html','utf8',(err,data)=>{
            res.write(data);
        })
    }
    if(req.url=='/about'){
        fs.readFile('./views/about.html','utf8',(err,data)=>{
            console.log(err)
            res.write(data);
        })
    }
})
server.listen(PORT,()=>{
    console.log(`server is running port: http://${hostname}:${PORT}`);
})
