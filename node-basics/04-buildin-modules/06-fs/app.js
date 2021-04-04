// 关于文件夹的操作，都是同步操作

const fs = require('fs');
// 创建文件夹， 回调函数中错误优先
// fs.mkdir('logs',(err)=>{
//     if(err) throw err
//     console.log('文件夹创建成功。');
// })

// 修改文件夹名字或者文件的名字，第一个参数是要修改的文件名，第二参数是新命名的文件夹名，回调函数中错误优先
// fs.rename('./logs','./log',()=>{
//     console.log('文件夹名字修改成功。');
// })

// 删除文件夹
// fs.rmdir('./log',()=>{
//     console.log('done.');
// })

// 读取文件夹
fs.readdir('./logs',(err,result)=>{
   console.log(result);
})