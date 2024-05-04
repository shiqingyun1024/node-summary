// 导入express
const express = require('express')

// 创建应用对象
const app = express();

// 创建路由
app.get('/response', (req, res) => {
    // 原生响应
    // res.statusCode = 404;
    // res.statusMessage = 'love';
    // res.setHeader('xxx', 'yyy');
    // res.write('hello express');
    // res.end('response')

    // express 响应
    // res.status(500);
    // res.set('aaa', 'bbb');
    // res.send('你好，express')

    // express也支持链式调用
    res.status(500).set('aaa11111', 'bbb').send('你好，express')
})

// 监听端口号
app.listen(3000, () => { // 注意这里的3000一定要用数字
    console.log("服务启动了，去访问吧")
})