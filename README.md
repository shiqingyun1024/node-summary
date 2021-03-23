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
### 2、NPM：Node Package Manger
#### 2.1 全局安装package
```
npm install forever --global (-g)
forever
npm uninstall forever --global
forever
```
##### 全局安装包的目录
```
Mac
/Users/felix/.nvm/versions/node/nvm各个版本/bin/

windows
c:\Users\你的用户名\AppData\Roaming\npm\node_modules
```
#### 2.2 本地安装package
```
cd ~/desktop
mkdir gp-project
cd gp-project
npm install underscore
npm list(ls)
```
#### 2.3 package.json初始化
```
pwd
npm init -y
ls
cat package.json
```
#### 2.4 使用package.json
```
npm install underscore --save
cat package.json
npm install lodash --save-dev
cat package.json
rm -rf node_modules
ls
npm install
npm uninstall underscore --save
npm list | grep underscore
cat package.json
```
#### 2.5 安装指定版本的包
```
pwd
npm list
npm info underscore
npm view underscore version
npm install underscore@1.8.0
npm list
npm uninstall underscore
npm list
<!-- 只装生产环境的包 -->
npm i --production
```
#### 2.6 更新本地安装的包
```
npm info underscore
npm view underscore version
npm install underscore@1.4.4 --save-dev
npm list | grep gulp
npm outdated  // ~2.0.0表示patch，^2.0.0表示minor  *表示xx最新版本
npm list | grep gulp
npm update
```
#### 2.7 清除缓存
```
npm cache clean --force
```