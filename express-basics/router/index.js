const express = require('express')

// 路由中间件
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.send('hello')
})

// 获取数据
router.get('/index',(req,res,next)=>{
    const query = req.query
    console.log(query);
    res.send(query)
    // res.json(query) // 也可以写成这种
})

// 添加数据
router.post('/index',(req,res,next)=>{
    const data = req.body
    res.send(data)
})

// 修改数据  覆盖式修改
router.put('/index',(req,res,next)=>{
    const data = req.body
    console.log(data);
    res.send(data)
})

// 修改数据    选择性修改  打补丁
router.patch('/index',(req,res,next)=>{
    const data = req.body
    console.log(data);
    res.send('patch response')
})

// 删除数据
router.delete('/index',(req,res,next)=>{
    const data = req.body
    console.log(data);
    res.send('delete response')
})

module.exports = router
