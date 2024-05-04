// 导入express
const express = require('express')

// 创建应用对象
const app = express();

// 创建路由
app.get('/other', (req, res) => {
    // 其他 响应

    // 跳转响应
    // res.redirect('http://atguigu.com'); // 重定向

    // 下载响应
    // res.download(__dirname+'./package.json'); // 下载响应

    // JSON响应
    // res.json({
    //     name: '尚硅谷',
    //     slogon: '好好学习，天天向上'
    // }) // 响应 JSON

    // 响应文件内容
    res.sendFile(__dirname + '/home.html') // 响应文件内容
})

// 监听端口号
app.listen(3000, () => { // 注意这里的3000一定要用数字
    console.log("服务启动了，去访问吧")
})