// 打印日志
const logger = require('../../utils/log')
const http = require('http')

const server = http.createServer((request,response)=>{
    // logger.debug(request)
    // logger.debug(response)
    response.write('home');
    response.end();
})
server.listen(8080,()=>{
    console.log('localhost:8080');
})

// 调试命令，在浏览器上会有一个调试页面
// node --inspect server.js
// 直接打开浏览器端的调试页面
// node --inspect  --inspect-brk server.js