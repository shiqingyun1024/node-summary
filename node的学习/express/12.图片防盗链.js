// 导入express
const express = require('express')

// 创建应用对象
const app = express();

// 声明中间件
app.use((req, res, next) => {
    // 检测请求头中的referer是否为127.0.0.1
    // 获取referer
    let referer = req.get('referer');
    console.log(referer)
    if (referer) {
        // 实例化
        let url = new URL(referer);
        // 获取hostname
        let hostname = url.hostname;
        // 判断
        if (hostname != '127.0.0.1') {
            // 响应404
            res.status(404).send('<h1>404 Not Found</h1>')
        }
    }
    next()
})

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))

// 创建路由
app.get('/home', (req, res) => {
    res.end('hello world')
})

// 监听端口号
app.listen(3000, () => { // 注意这里的3000一定要用数字
    console.log("服务启动了，去访问吧")
})