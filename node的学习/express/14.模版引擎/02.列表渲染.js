const ejs = require('ejs')
const fs = require('fs');
let xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧']
let html = fs.readFileSync('./02_西游记.html').toString();
let result = ejs.render(html, { xiyou: xiyou })
console.log(result)