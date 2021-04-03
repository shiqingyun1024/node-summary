// 批量写入文件，批量读取文件
const fs = require('fs');

// 批量写入文件
// for(var i = 0; i < 10; i++){
//     fs.writeFile(`./logs/log-${i}.txt`,`文件内容为${i}`,(err)=>{
//         console.log('批量写入文件')
//     })
// }

// 批量读取文件
// fs.readdir('./',(err,data)=>{
//     data.forEach((value,index)=>{
//         fs.stat(`./${value}`,(err,stats)=>{
//             // stats.isDirectory是否是文件夹
//             console.log(value+' is '+(stats.isDirectory()?'directory':'file'))
//         })

//     })
// })

// 批量读取文件的内容,  递归调用
function readDir(dir){
    fs.readdir(dir,(err,content)=>{
        content.forEach((value,index)=>{
            let joinDir = `${dir}/${value}`
            fs.stat(joinDir,(err,stats)=>{
                // stats.isDirectory用来判断是否是文件夹
                if(stats.isDirectory()){
                    readDir(joinDir)
                }else{
                    fs.readFile(joinDir,'utf-8',(err,content)=>{
                        console.log(content);
                    })
                }
            })
        })
    })

}
readDir('./')