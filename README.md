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
<!-- 查看所有的版本 -->
npm view underscore versions
npm install underscore@1.4.4 --save-dev
npm list | grep gulp
<!-- 查看过期包 -->
npm outdated 
npm list | grep gulp
<!-- 版本更新 -->
npm update
```
#### node package versions（安装的包的版本说明）
```
13.4.6（假设版本号）
major（主版本号---大的更新）：13，  minor（次版本号---添加新功能或者做一些修改，这个建立在主版本号确定的情况下）：4，patch（补丁号---修复bug等  偶数是稳定的，奇数是测试版本）：6

"dependencies":{
   "jquery":"^2.0.0",
   "underscore":"~1.12.0",
   "vue-cli":"3.4.0",
   "vue":"*"
}
有四种符号
1、^ 表示只锁定主版本号，主版本号确定后，后面获取最新的版本
以上面的jquery为例，主版本号2确定后，后面会获取在主版本号下最新的版本 2.2.4

2、~表示锁定主版本号和次版本号，后面获取最新的版本
以上面的underscore为例，主版本号1和次版本号12确定后，后面会获取在主次版本号下最新的版本 1.12.4

3、没有任何符号表示版本锁死了，就是指定的这个版本。
以上面的vue-cli为例，主版本号、次版本号、补丁号都确定了

4、* 表示最新的版本

总结：
^ 锁定 major（主版本号）
~ 锁定 minor（次版本号）
空锁定 patch（补丁号）
*表示最新的版本
```
#### 2.7 清除缓存
```
npm cache clean --force
```

