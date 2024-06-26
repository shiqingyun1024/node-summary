// 导入express
const express = require('express')

// 创建应用对象
const app = express();

// 声明路由中间件
let checkCodeMiddleware = (req, res, next) => {
    // 判断URL 中 是否 code参数等于521
    if (req.query.code === '521') {
        next()
    } else {
        res.send('暗号错误')
    }
}
// 创建路由  把路由中间件放在需要的设置中间件规则的路由后面
app.get('/home', checkCodeMiddleware, (req, res) => {
    res.send('前台首页')
})

// 把路由中间件放在路由后面，执行的时候先执行中间件里面的内容  
app.get('/admin', checkCodeMiddleware, (req, res) => {
    // 判断URL 中 是否 code参数等于521
    if (req.query.code === '521') {
        res.send('后台首页')
    } else {
        res.send('暗号错误')
    }

})
app.get('/setting', (req, res) => {
    res.send('设置页面')
})
app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

// 监听端口号
app.listen(3000, () => { // 注意这里的3000一定要用数字
    console.log("服务启动了，去访问吧")
})