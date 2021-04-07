const express = require('express')

// 路由中间件
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.send('hello')
})

router.get('/index',(req,res,next)=>{
    const query = req.query
    console.log(query);
    res.send(query)
    // res.json(query) // 也可以写成这种
})

router.post('/index',(req,res,next)=>{
    const data = req.body
    res.send(data)
})

module.exports = router
