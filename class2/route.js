/**
 * respose head contain this thing
1.Status Code: 200
2.Status Message: 'OK'
3.Headers: { 'Content-Type': 'text/html',
 'Custom-Header': 'CustomValue'
 }
 */



const http=require('http');
const PORT=process.env.PORT ||3000;
const hostname='127.0.0.1';


const server=http.createServer((req,res)=>{
    res.writeHead(200, 'i am insert this in my resposce', {
        'Content-Type': 'text/html',
        'Custom-Header': 'CustomValue'
    });
    res.write("set custom response head cearfully");
    res.end();
})
server.listen(PORT,()=>{
    console.log(`server is running port: http://${hostname}:${PORT}`);
})