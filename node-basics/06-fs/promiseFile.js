// 操作文件的promise操作
const fsPromises = require('fs').promises;
;(async ()=>{
    let result = await fsPromises.readFile('./logs/log1.log')
    console.log(result.toString());
})()
// 也可以直接使用then，catch方法。fsPromises.readFile返回的是一个promise对象
fsPromises.readFile('./logs/log1.log').then(result=>{
    console.log(result.toString());
})