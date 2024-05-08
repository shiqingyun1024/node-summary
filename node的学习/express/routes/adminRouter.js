// 1、导入express
const express = require('express');

// 2、创建路由对象
const router = express.Router();

// 3. 创建路由规则 
// 创建路由
router.get('/admin', (req, res) => {
    res.send('后台首页')
})

// 创建路由
router.get('/search', (req, res) => {
    res.send('搜索页面')
})

// 4、暴露router
module.exports = router