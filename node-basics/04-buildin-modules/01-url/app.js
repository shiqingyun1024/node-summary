const url = require('url');
// 用于打印js日志的
var log4js = require("log4js");
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
logger.level = "debug";
const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
const urlObject =  {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com:443',
    port: '443',
    hostname: 'www.baidu.com',
    hash: '#tag=3',
    search: '?id=2',
    query: 'id=2',
    pathname: '/path/index.html',
    path: '/path/index.html?id=2',
    href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
  }
  
// url.parse是把一个url链接解析成一个对象
console.log(url.parse(urlString));

// url.format正好相反，把一个对象解析成一个url字符串
console.log(url.format(urlObject));

// url.resolve
console.log(url.resolve('http://wwww.abc.com/a','../'));  // http://wwww.abc.com/
console.log(url.resolve('http://wwww.abc.com/a','/b'));  // http://wwww.abc.com/b

// URLSearchParams(url.parse(urlString).serach)  直接获取url中的参数值
const urlParams = new URLSearchParams(url.parse(urlString).search)
console.log(urlParams.get('id'));

// 进行日志打印
// logger.debug(url.parse(urlString));
// logger.debug(url.format(urlObject));