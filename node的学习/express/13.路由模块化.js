// 导入express
const express = require('express')
// 导入路由
const homeRouter = require('./routes/homeRouter')

// 创建应用对象
const app = express();

app.use(homeRouter)

// 声明路由中间件
let checkCodeMiddleware = (req, res, next) => {
    // 判断URL 中 是否 code参数等于521
    if (req.query.code === '521') {
        next()
    } else {
        res.send('暗号错误')
    }
}

// 把路由中间件放在路由后面，执行的时候先执行中间件里面的内容  
app.get('/admin', checkCodeMiddleware, (req, res) => {
    // 判断URL 中 是否 code参数等于521
    if (req.query.code === '521') {
        res.send('后台首页')
    } else {
        res.send('暗号错误')
    }

})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

// 监听端口号
app.listen(3000, () => { // 注意这里的3000一定要用数字
    console.log("服务启动了，去访问吧")
})