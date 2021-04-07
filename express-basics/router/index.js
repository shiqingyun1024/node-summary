const express = require('express')

// 路由中间件
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.send('hello')
})

router.get('/index',(req,res,next)=>{
    res.send('index pages')
})

module.exports = router
