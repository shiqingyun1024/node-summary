const http = require('http')
const path = require('path')
const readStaticFile = require('./readStaticFile')
http.createServer(async (req,res)=>{
    let urlstring = req.url;
    let filePathName = path.join(__dirname,'./public',urlstring)
    let {data,mimeType }= await readStaticFile(filePathName)
    console.log(data);
    res.write('hello')
    res.end()
}).listen(8080,()=>{
    console.log('localhost:8080');
})
