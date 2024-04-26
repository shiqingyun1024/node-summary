// 导入http模块
const http = require('http')
const fs = require('fs')
const path = require('path')
const mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

// 创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    console.log(pathname)
    // 直接访问 http://127.0.0.1:9000/js/index.js  下面的拼接会自动加上page变成http://127.0.0.1:9000/page/js/index.js
    // 拼接文件路径
    let filePath = __dirname + '/page' + pathname;
    let ext = path.extname(filePath).slice(1)
    let type = mimes[ext]
    if (type) {
        if (ext === 'html') {
            // 匹配到了                         text/html;charset=utf-8
            response.setHeader('content-type', type + ';charset=utf-8')
        } else {
            // 匹配到了         浏览器请求回来的css\js等文件会根据网页（也就是html来自动设置一样的charset，所以没必要加了，只给html加上就好了）
            response.setHeader('content-type')
        }

    } else {
        // 没有匹配到
        response.setHeader('content-type', 'application/octet-stream')
    }
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