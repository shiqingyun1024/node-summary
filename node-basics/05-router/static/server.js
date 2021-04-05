const http = require('http')
const path = require('path')
http.createServer((req,res)=>{
    let urlstring = req.url;
    let filePathName = path.join(__dirname,'./public',urlstring)
    console.log(filePathName);
    console.log(urlstring);
    res.write('hello')
    res.end()
}).listen(8080,()=>{
    console.log('localhost:8080');
})
