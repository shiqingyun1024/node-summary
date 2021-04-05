const path = require('path');
// mime根据扩展名来生成对应的类型,mime.getType()
const mime = require('mime');
const fs = require('fs')

function readStaticFile(filePathName){
    let ext = mime.getType(path.parse(filePathName).ext)
    console.log(ext);

    // 判断文件是否存在
    if(fs.existsSync(filePathName)){
        console.log('文件存在');
    }else{
        console.log('文件不存在');
    }

    return 'hello'
}

module.exports = readStaticFile