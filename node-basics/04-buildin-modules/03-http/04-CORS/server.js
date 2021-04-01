const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    let urlstr = req.url
    let urlObj = url.parse(urlstr,true)
    switch(urlObj.pathname){
        case'/api/data':
        res.writeHead(200,{
            'content-type':'application/json',
            'Access-Control-Allow-origin':'*'
        })
           res.write(`{"ret":true,"data":"hello"}`)
           break;
        default:
            res.write('page not found.')      
    }
    res.end()
})

server.listen(8080,()=>{
    console.log('localhost:8080');
})