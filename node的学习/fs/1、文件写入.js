// 1、导入fs模块
const fs = require('fs');

// 2、写入文件
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', err => {
    // err 写入失败：错误对象 写入成功：null
    if (err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
})