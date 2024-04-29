// 伪代码
function require(file) {
    // 1、将相对路径转为绝对路径，定位目标文件
    let absolutePath = path.resolve(__dirname, file);
    //2．缓存检测
    if (caches[absolutePath]) {
        return caches[absolutePath];
    }
    //3.读取文件的代码
    let code = fs.readFileSync(absolutePath).toString();
    //4.包裹为一个函数 然后执行

}

const m = require('./me.js')