const http = require('http')
http.createServer((req,res)=>{
    let urlstring = req.url;
    console.log(urlstring);
    res.write('hello')
    res.end()
}).listen(8080,()=>{
    console.log('localhost:8080');
})
