// 第三步 引用模块 ===== 自己写的模块引用的时候一定要写路径，如果不写路径，会到node_modules里面找
const {name,age} = require('./name');
// 第四步 使用模块
name.sayName();
console.log(age);