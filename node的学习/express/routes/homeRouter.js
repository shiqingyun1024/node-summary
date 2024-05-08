// 1、导入express
const express = require('express');

// 2、创建路由对象
const router = express.Router();

// 3. 创建路由规则 
// 创建路由
router.get('/home', (req, res) => {
    res.send('前台首页')
})

// 创建路由
router.get('/setting', (req, res) => {
    res.send('设置页面')
})

// 4、暴露router
module.exports = router