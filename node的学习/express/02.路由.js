// 1、导入express
const express = require('express')

// 2、创建应用对象
const app = express();

// 3、创建路由
app.get('/home', (req, res) => {
    res.end('hello world')
})

app.get('/', (req, res) => {
    res.end('初次进入页面')
})

app.post('/login', (req, res) => { // 地址输入都是get请求，post请求需要发送ajax或者form表单
    res.end('进入登录页面~')
})

// 监听端口号
app.listen(3000, () => { // 注意这里的3000一定要用数字
    console.log("服务启动了，去访问吧")
})