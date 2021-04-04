// 文件的同步操作
const fs = require('fs');

// 同步读取文件操作，异步读取操作的方法是fs.readFile
const content = fs.readFileSync('./logs/log1.log');
console.log(content.toString());
console.log('continue....')