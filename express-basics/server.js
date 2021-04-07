const express = require('express')

const app = express()

const router = require('./router/index')

app.use('/',router)

app.listen(8080,()=>{
    console.log('localhost:8080');
})