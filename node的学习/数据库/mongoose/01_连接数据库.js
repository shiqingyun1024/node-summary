// 1、安装mongoose
// 2、导入mongoose
const mongoose = require('mongoose');

// 3、链接mongodb服务                   bilibili是数据库的名称  27017是mongodb的默认端口号
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4.设置回调
// 设置连接成功的回调
mongoose.connection.on('open', () => {
    console.log('连接成功')
});

// 设置连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败');
})

// 设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭');
})

// 关闭mongoose的链接
// setTimeout(() => {
//     mongoose.disconnect();
// }, 2000)
