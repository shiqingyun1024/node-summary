const express = require('express')

const app = express()

const router = require('./router/index')

const bodyParser = require('body-parser')

app.use('/',router)

app.use(bodyParser.urlencoded({extend:false}))

app.listen(8080,()=>{
    console.log('localhost:8080');
})