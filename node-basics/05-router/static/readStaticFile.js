const path = require('path');
// mime根据扩展名来生成对应的类型,mime.getType()
const mime = require('mime');

function readStaticFile(filePathName){
    let ext = mime.getType(path.parse(filePathName).ext)
    console.log(ext);

    return 'hello'
}

module.exports = readStaticFile