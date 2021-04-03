// 文件的操作, 以下都是同步操作。
const fs = require('fs');
// 创建文件并写入内容，第一个参数是写入的文件名，第二个参数是写入的内容，第三个参数是回调函数(错误优先)
// fs.writeFile('./logs/log1.log','hello\nworld',(err)=>{
//    console.log('done.');
// })

// 修改文件的内容，或者说是追加文件的内容
// fs.appendFile('./logs/log1.log','!!!',(err)=>{
//     console.log('修改成功！');
// })

// 删除文件的操作
// fs.unlink('./logs/log1.log',(err)=>{
//     console.log('done.');
// })

// 读取文件  第一个参数是文件名，第二个参数是编码格式（可省略），第三个参数是回调函数
// fs.readFile('./logs/log1.log','utf-8',(err,content)=>{
//     console.log(content);
// })
// 可以省略第二个参数，然后用toString
// fs.readFile('./logs/log1.log',(err,content)=>{
//     console.log(content.toString());
// })

