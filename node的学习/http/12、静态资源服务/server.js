// 导入http模块
const http = require('http')
const fs = require('fs')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    // 拼接文件路径
    let filePath = __dirname + '/page' + pathname;
    // 读取文件fs异步API
    fs.readFile(filePath, (error, data) => {
        if (error) {
            response.statusCode = 500
            response.end('文件读取失败~~')
            return;
        }
        // 响应文件内容
        response.end(data)
    })
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动.....')
})