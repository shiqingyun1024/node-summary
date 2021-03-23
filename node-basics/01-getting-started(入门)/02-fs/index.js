const fs = require('fs');

// 三个参数，1.写入文件的名字，2.写入的内容，3.回调函数
fs.writeFile('./log.txt', 'hello', (err, data) => {
    if (err) {
        console.log('文件创建失败');
    } else {
        console.log('文件创建成功');
    }
})