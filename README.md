# node-summary
node相关的总结

## 一、Node.js是什么
```
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
```
### 1、特性
```
Node.js可以解析JS代码(没有浏览器安全级别的限制)提供很多系统级别的API，如：
. 文件的读写(File System)
. 进程的管理(Process)
. 网络通信(HTTP/HTTPS)
. ....

```
### 2.2 文件的读写（File System）
```
const fs = require('fs')
fs.readFile('./ajax.png', 'utf-8', (err, content)=>{
    console.log(content);
})
```
### 2.3 进程的管理（Process）
```
function main(argv){
    console.log(argv)
}
main(process.argv.slice(2))

运行
node 2.3-process.js argv1 argv2
```
### 2.4 网络通信（HTTP/HTTPS）
```
const http = require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/plain"
    })
    res.write("hello nodejs")
    res.end();
}).listen(3000)
```
## 二、Node相关工具
### 1、NVM：Node Version Manger
#### 1.1 Mac安装nvm
```
https://github.com/nvm-sh/nvm/blob/master/README.md
```
#### 1.2 Windows安装nvm
```
nvm-windows
nodist
```
