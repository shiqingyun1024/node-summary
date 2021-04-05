const http = require('http')
const path = require('path')
const readStaticFile = require('./readStaticFile')
http.createServer((req,res)=>{
    let urlstring = req.url;
    let filePathName = path.join(__dirname,'./public',urlstring)
    let data = readStaticFile(filePathName)
    res.write(data)
    res.end()
}).listen(8080,()=>{
    console.log('localhost:8080');
})
