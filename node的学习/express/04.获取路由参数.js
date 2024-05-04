// 导入express
const express = require('express')

// 创建应用对象
const app = express();

// 创建路由
app.get('/:id.html', (req, res) => {
    // 获取URL路由参数
    console.log(req.params.id) // 主要是req.params

    res.set('content-type', 'text/html;charset=utf-8')
    res.end('商品详情')
})

// 监听端口号
app.listen(3000, () => { // 注意这里的3000一定要用数字
    console.log("服务启动了，去访问吧")
})