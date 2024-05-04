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
    // res.status(500); // 设置响应状态码
    // res.set('aaa', 'bbb'); // 设置响应头
    // res.send('你好，express') // 设置响应体

    // express也支持链式调用
    // res.status(500).set('aaa11111', 'bbb').send('你好，express')

    // 其他 响应
    // res.redirect('http://atguigu.com'); // 重定向
    // res.download('./package.json'); // 下载响应
    // res.json() // 响应 JSON
    // res.sendFile(__dirname+'/home.html') // 响应文件内容
})

// 监听端口号
app.listen(3000, () => { // 注意这里的3000一定要用数字
    console.log("服务启动了，去访问吧")
})