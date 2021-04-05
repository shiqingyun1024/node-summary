const path = require('path');
// mime根据扩展名来生成对应的类型,mime.getType()
const mime = require('mime');
const fs = require('fs')

function myReadFile(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
            if(err){
                resolve("你访问的是一个文件夹")
            }else{
                resolve(data)
            }
        })
    })
    
}

async function readStaticFile(filePathName){
    let ext = path.parse(filePathName).ext
    let mimeType = mime.getType(ext) || 'text/html'
    // console.log(ext);
    let data
    // 判断文件是否存在
    if(fs.existsSync(filePathName)){
        // 如果存在ext，说明是文件，因为文件有后缀名。
        // 如果不存在ext，说明是文件夹，因为文件夹没有后缀名。
        if(ext){
            data = await myReadFile(filePathName)
        }else{
            data = await myReadFile(path.join(filePathName,'./index.html'))
        }
    }else{
        console.log(0)
       data =  "文件没找到"
    }

    return {
        mimeType,
        data
    }
}

module.exports = readStaticFile