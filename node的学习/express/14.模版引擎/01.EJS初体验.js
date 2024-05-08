// 1、安装EJS
// 2、导入 EJS
const ejs = require('ejs');
const fs = require("fs");

let str = fs.readFileSync('./01_html.html').toString()

let weather = '今天天气不错~';

// 字符串
let china = '中国';

// 使用 ejs 渲染
let result = ejs.render(str, { china: china, weather });

console.log(result)