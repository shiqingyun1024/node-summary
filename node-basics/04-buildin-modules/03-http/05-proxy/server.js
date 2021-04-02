const http = require('http');
const url = require('url');
const {createProxyMiddleware} = require('http-proxy-middleware');

// console.log(proxy);

const server = http.createServer((req,res)=>{
    let urlstr = req.url
    if(/\/api/.test(urlstr)){
        const proxy = createProxyMiddleware('/api',{
            target:'https://px.effirst.com',
            changeOrigin:true
        })
        proxy(req,res)
        // 前端请求的是 https://localhost:8080/api/...
        // 后端进行代理设置，切换源。后端请求的地址是：https://mar.vip.com/api/...
    }else{
        console.log('error');
    }

})

server.listen(8080,()=>{
    console.log('localhost:8080');
})