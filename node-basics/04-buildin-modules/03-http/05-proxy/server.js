const http = require('http');
const url = require('url');
const {createProxyMiddleware} = require('http-proxy-middleware');

// console.log(proxy);

const server = http.createServer((req,res)=>{

})

server.listen(8080,()=>{
    console.log('localhost:8080');
})