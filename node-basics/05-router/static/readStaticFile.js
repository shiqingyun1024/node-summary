const path = require('path');
// mime根据扩展名来生成对应的类型,mime.getType()
const mime = require('mime');
const fs = require('fs')

function myReadFile(file,res){
    fs.readFile(file,(err,data)=>{
        if(err){
            res.end('error')
        }
    })
}

function readStaticFile(filePathName){
    let ext = mime.getType(path.parse(filePathName).ext)
    let mimeType = mime.getType(ext)
    console.log(ext);
    let data
    // 判断文件是否存在
    if(fs.existsSync(filePathName)){
        // 如果存在ext，说明是文件，因为文件有后缀名。
        // 如果不存在ext，说明是文件夹，因为文件夹没有后缀名。
        if(ext){
            data = myReadFile(filePathName)
        }else{
            data = myReadFile(path.join(filePathName,'./index.html'),res)
        }
    }else{
        res.end('file not found')
    }

    return {
        mimeType,
        data
    }
}

module.exports = readStaticFile