const express = require('express')

const app = express()

const router = require('./router/index')

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extend:false}))

// parse application/json    解析json字符串
app.use(bodyParser.json())


app.use('/',router)



app.listen(8080,()=>{
    console.log('localhost:8080');
})