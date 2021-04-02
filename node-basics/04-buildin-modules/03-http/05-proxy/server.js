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
    }else if(/\/lagou/.test(urlstr)){
        const proxy2 = createProxyMiddleware('/lagou',{
            target:'https://m.lagou.com',
            changeOrigin:true,
            // 重写请求路径，本地请求的时候带有/lagou，但是在后端代理切换源后，请求的地址里面是没有/lagou，所以需要重写，把/lagou设置为空字符串。
            pathRewrite:{
                '^/lagou':''
            }

        })
        // https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
        proxy2(req,res)

    }else{
        console.log('error');
    }

})

server.listen(8080,()=>{
    console.log('localhost:8080');
})