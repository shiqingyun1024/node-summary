// http是node的内置模块，node有三类模块：内置，第三方，自定义
const http = require('http')

const server = http.createServer((request,response)=>{
    let url = request.url;
    response.write(url);
    response.end();
})

// 接受三个参数 端口号、域名、回调函数
server.listen(8090,'localhost',()=>{
    console.log('localhost:8090');
})