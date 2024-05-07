// 导入express
const express = require('express')
const fs = require('fs');
const path = require('path');

// 创建应用对象
const app = express();

// 声明中间件函数
function recordMiddleware(req, res, next) {
    // 获取 url 和 ip
    let { url, ip } = req;
    // 将信息保存在文件中 access.log
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}  ${ip}\r\n`)
    // 调用next
    next()
}

// 使用中间件函数
app.use(recordMiddleware)

// 创建路由
app.get('/home', (req, res) => {
    // // 获取url和ip
    // let { url, ip } = req;
    // // 将信息保存在文件中 access.log
    // fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}  ${ip}\r\n`)
    res.send('前台首页')
})
app.get('/admin', (req, res) => {
    res.send('后台首页')
})
app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

// 监听端口号
app.listen(3000, () => { // 注意这里的3000一定要用数字
    console.log("服务启动了，去访问吧")
})