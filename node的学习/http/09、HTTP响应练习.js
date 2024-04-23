// 导入http模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {

    response.end() // 有且只能有一个response.end
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动.....')
})