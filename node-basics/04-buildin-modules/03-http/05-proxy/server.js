const http = require('http');
const url = require('url');
const {createProxyMiddleware} = require('http-proxy-middleware');

// console.log(proxy);

const server = http.createServer((req,res)=>{
    let urlstr = req.url
    if(/\/ajax/.test(urlstr)){
        const proxy = createProxyMiddleware('/ajax',{
            target:'https://lady.vip.com',
            changeOrigin:true
        })
    }else{
        console.log('error');
    }

})

server.listen(8080,()=>{
    console.log('localhost:8080');
})