// 主要是fs.watch方法，监测文件的变化，包括修改内容或者名称，删除文件
// 不过操作系统不一样，会有一定的差异。
// fs.watchFile  这个方法目前没有这个问题（操作系统不一样，会有一定的差异）
const fs = require('fs');

fs.watch('./logs/log-0.txt',(err)=>{
    console.log('文件发生变化');
})
fs.watchFile('./logs/log-0.txt',(curr,prev)=>{
    console.log(`当前的最近修改时间是:${curr.mtime}`);
    console.log(`之前的最近修改时间是:${prev.mtime}`);
})