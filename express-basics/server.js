const express = require('express')
const path = require('path')

const app = express()

const router = require('./router/index')

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extend:false}))

// parse application/json    解析json字符串
app.use(bodyParser.json())

// 静态资源服务中间件（内置中间件）
app.use(express.static('public'))

// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', { // 注意此处和官网不一样
    debug: process.env.NODE_ENV !== 'production',
    escape: false  // 是个坑，转化HTML5代码
});
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'art'); // 设置art结尾的文件为引擎模板


app.use('/',router)



app.listen(8080,()=>{
    console.log('localhost:8080');
})