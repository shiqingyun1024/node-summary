# node-summary
node相关的总结

## node的浏览器端调试
```
node --inspect --inspect-brk server.js
```
```
mac电脑上查询某个端口是否被占用，用命令： lsof -i 端口号
关掉这个进程的命令用的是：kill -9 端口号
```
## node进程管理工具
```
- supervisor 
- nodemon // 本地常用
- forever 
- pm2
```
# 01-Node.js基础

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
### 2.5 获取文件路径（path）
```
//把一个路径或路径片段的序列解析为一个绝对路径
path.resolve(__dirname,'dist')
path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 **记住，是从右到左**
例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。

官方例子：
path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
我之前的理解是像拼接字符串一样从右到左将参数拼成一个绝对路径，但是给出的每一个例子都完全不符合这个理解，
然后看了一篇文章（https://blog.csdn.net/kikyou_csdn/article/details/83150538），感觉作者说的很有道理，

path.resolve([…paths])里的每个参数都类似在当前目录执行一个cd操作，从左到右执行，返回的是最后的当前目录。**重要！！！**
（很有道理，这种方法很值得借鉴）


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
// 查看所有安装的包
npm list
// 查看underscore最新的版本
npm info underscore
// 查看underscore最新的版本同 npm info underscore
npm view underscore version
// 查看underscore所有的版本
npm view underscore versions
// 安装underscore
npm install underscore@1.8.0
// 查看underscore包的版本信息
npm ls underscore
// 查看全局中underscore包的版本信息
npm ls underscore -g
// 查看所有安装的包
npm list
// 卸载underscore
npm uninstall underscore
npm list
<!-- 只装生产环境的包 -->
npm i --production
```
#### 2.6 更新本地安装的包
```
<!-- 查看underscore的最新的版本 -->
npm info underscore
<!-- 查看underscore的所有的版本 -->
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
#### 2.8 上传自己的包
##### 2.8.1 编写模块
```
保存为index.js
exports.sayHello = function(){
    return 'Hello World'
}
```
##### 2.8.2 初始化包描述文件
npm init package.json
```
{
    "name":"gp19-npm",
    "version":"1.0.1",
    "description":"gp19 self module",
    "main":"index.js",
    "scripts":{
        "test":"make test",
    },
    repository:{
       "type":"Git", 
       "url":"git+https://github.com/lurongtao/gp19-npm.git"
    },
    "keywords":{
        "demo"
    }
    
}
```
##### 2.8.3 注册npm仓库账号
```
https://www.npmjs.com  上面的账号
felix_lurt/qqmko09ijn
npm adduser
```
##### 2.8.4 上传包
```
npm publish
```
坑：403 Forbidden
```
查看npm源： npm config get registry
切换npm源方法一：npm config set registry http://registry.npmjs.org
切换npm源方法二：nrm use npm
```
##### 2.8.5 安装包
```
npm install gp19-npm
```
##### 2.8.6 卸载包
```
查看当前项目引用了哪些包
npm ls
卸载包：
npm unpublish --force
```
##### 2.8.7 使用引入包
```
var hello = require('gp19-npm')
hello.sayHello();
```
#### 2.10 npm 安装git上发布的包
```
# 这样适合安装公司内部的git服务器上的项目
npm install git+https://git@github.com:lurongtao/gp-project.git

#或者以ssh的方式
npm install git+ssh://git@github.com:lurongtao/gp-project.git

在项目中一般这样用：
"devDependencies": {
    "@anyi/anyi-ui": "git+http://downloader:downloader@gogs.pms.anyi-tech.com/anyi-front/anyi-ui.git#1.2.37",
    ........
    ........
}  
```
#### 2.11 cross-env使用
##### 2.11.1 cross-env是什么？
```
运行跨平台设置和使用环境变量的脚本
```
##### 2.11.2、为什么需要cross-env?
```
我们在自定义配置环境变量的时候，由于在不同的环境下，配置方式也是不同的。例如在window和linux下配置环境变量。
2.1、在window下配置
#node中常用的到的环境变量是NODE_ENV，首先查看是否存在 
set NODE_ENV 

#如果不存在则添加环境变量 
set NODE_ENV=production 

#环境变量追加值 set 变量名=%变量名%;变量内容 
set path=%path%;C:\web;C:\Tools 

#某些时候需要删除环境变量 
set NODE_ENV=

2.2、在linux下配置
#node中常用的到的环境变量是NODE_ENV，首先查看是否存在
echo $NODE_ENV

#如果不存在则添加环境变量
export NODE_ENV=production

#环境变量追加值
export path=$path:/home/download:/usr/local/

#某些时候需要删除环境变量
unset NODE_ENV

#某些时候需要显示所有的环境变量
env
```
##### 2.11.3、cross-env的作用是什么？
```
当我们使用 NODE_ENV = production 来设置环境变量的时候，大多数windows命令会提示将会阻塞或者异常，或者，windows不支持NODE_ENV=development的这样的设置方式，会报错。因此 cross-env 出现了。我们就可以使用 cross-env命令，这样我们就不必担心平台设置或使用环境变量了。也就是说 cross-env 能够提供一个设置环境变量的scripts，这样我们就能够以unix方式设置环境变量，然而在windows上也能够兼容的。
```
##### 2.11.4、如何在项目中使用cross-env?
```
npm install --save-dev cross-env

然后在package.json中的scripts命令如下如下：
"scripts": {
  "dev": "cross-env NODE_ENV=development webpack-dev-server --progress --colors --devtool cheap-module-eval-source-map --hot --inline",
  "build": "cross-env NODE_ENV=production webpack --progress --colors --devtool cheap-module-source-map",
}
```
### 3、NRM：node registry manger
#### 3.1 手工切换源
##### 3.1.1 查看当前源
```
npm config get registry
```
##### 3.1.2 切换淘宝源
```
npm config set registry https://registry.npm.taobao.org
```
#### 3.2 NRM管理源
```
NRM(npm registry manager)是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在npm源间切换。
```
##### 3.2.1 安装nrm
```
在命令行执行命令，npm install -g nrm 全局安装nrm
```
##### 3.2.2 使用nrm
```
执行命令nrm ls查看可选的源头。其中，带*的是当前使用的源，上面的输出表明当前源是官方源。
```
##### 3.2.3 切换nrm
```
如果要切换到taobao源，执行命令nrm use taobao。
```
##### 3.2.4 测试速度
```
你还可以通过nrm test测试相应源的响应时间
nrm test
```
### 4、NPX：npm package extention
```
npm 从5.2版开始，增加了npx命令。它有很多用处，下面介绍该命令的主要使用场景。
Node 自带npm模块，所以可以直接使用npx命令。万一不能用，就要手动安装一下。
npm install -g npx
```
#### 4.1 调用项目安装的模块
```
npx想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了Mocha。
npm install -D mocha
一般来说，调用 Mocha ，只能在项目脚本和 package.json 的scripts字段里面， 如果想在命令行下调用，必须像下面这样。

# 项目的根目录下执行
node_modules/.bin/mocha --version

npx 就是想解决这个问题，让项目内部安装的模块(也就是测试环境的包)用起来更方便，只要像下面这样调用就行了。
npx mocha --version

npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。
由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。
等同于 ls 
npx ls
注意，Bash 内置的命令不在$PATH里面，所以不能用。比如，cd是 Bash 命令，因此就不能用npx cd。
```

#### 4.2 避免全局安装模块
```
除了调用项目内部模块，npx 还能避免全局安装的模块。比如，create-react-app这个模块是全局安装，npx 可以运行它，而且不进行全局安装。

npx create-react-app my-react-app
上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。

下载全局模块时，npx 允许指定版本。
npx uglify-js@3.1.0 main.js -o ./dist/main.js
上面代码指定使用 3.1.0 版本的uglify-js压缩脚本。

注意，只要 npx 后面的模块无法在本地发现，就会下载同名模块。比如，本地没有安装http-server模块，下面的命令会自动下载该模块，在当前目录启动一个 Web 服务。

npx http-server

```
#### 4.3 --no-install 参数和--ignore-existing 参数
```
如果想让 npx 强制使用本地模块，不下载远程模块，可以使用--no-install参数。如果本地不存在该模块，就会报错。
npx --no-install http-server

反过来，如果忽略本地的同名模块，强制安装使用远程模块，可以使用--ignore-existing参数。比如，本地已经全局安装了create-react-app，但还是想使用远程模块，就用这个参数。
npx --ignore-existing create-react-app my-react-app
```
#### 4.4 使用不同版本的node
```
利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。
npx node@0.12.8 -v
v0.12.8

上面命令会使用 0.12.8 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。

某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。
```
##### 4.4.1 -p参数
```
-p参数用于指定 npx 所要安装的模块，所以上一节的命令可以写成下面这样。
npx -p node@0.12.8 node -v 
v0.12.8

上面命令先指定安装node@0.12.8，然后再执行node -v命令。
-p参数对于需要安装多个模块的场景很有用
npx -p lolcatjs -p cowsay [command]
```
##### 4.4.2 -c参数
```
如果 npx 安装多个模块，默认情况下，所执行的命令之中，只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。
npx -p lolcatjs -p cowsay 'cowsay hello | lolcatjs'
# 报错

上面代码中，cowsay hello | lolcatjs执行时会报错，原因是第一项cowsay由 npx 解释，而第二项命令localcatjs由 Shell 解释，但是lolcatjs并没有全局安装，所以报错。

-c参数可以将所有命令都用 npx 解释。有了它，下面代码就可以正常执行了。
npx -p lolcatjs -p cowsay -c 'cowsay hello | lolcatjs'
-c参数的另一个作用，是将环境变量带入所要执行的命令。举例来说，npm 提供当前项目的一些环境变量，可以用下面的命令查看。
npm run env | grep npm_

-c参数可以把这些 npm 的环境变量带入 npx 命令。
npx -c 'echo "$npm_package_name"'
上面代码会输出当前项目的项目名。
```
#### 4.5 执行 GitHub 源码
```
npx 还可以执行 GitHub 上面的模块源码。
# 执行 Gist 代码
npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32

# 执行仓库代码
npx github:piuccio/cowsay hello

注意，远程代码必须是一个模块，即必须包含package.json和入口脚本。
```
## 三、模块/包与CommonJs
### 1、模块/包分类
```
Node.js 有三类模块，即内置的模块、第三方的模块、自定义的模块。
```
### 1.1、内置的模块
```
Node.js内置模块又叫核心模块，Node.js安装完成可直接使用。如：
const path = require('path')
var extname = path.extname('index.html')
console.log(extname)
```
### 1.2、第三方的Node.js模块
```
第三方的Node.js模块指的是为了实现某些功能，发布的npmjs.org上的模块，按照一定的开源协议供社群使用。如：
npm install chalk

const chalk = require('chalk')
console.log(chalk.blue('hello world'))
```
### 1.3、自定义的Node.js模块
```
自定义的Node.js模块，也叫文件模块，是我们自己写的供自己使用的模块。同时，这类模块发布到npmjs.org上就成了开源的第三方模块。

自定义模块是在运行时动态加载，需要完整的路径分析、文件定位、编译执行过程、速度相比核心模块稍微慢一些，但是用的非常多。
```
### 1.3.1、模块定义、接口暴露和引用接口
```
我们可以把公共的功能 抽离成为一个单独的js文件 作为一个模块，默认情况下这个模块里面的方法或者属性，外面是没法访问的。如果要让外部可以访问模块里面的方法或者属性，就必须在模块里面通过exports或者module.exports暴露属性或者方法。

m1.js:
const name = 'gp19'
const sayName = ()=>{

}
```
### 2、CommonJs
### 2.1、module.exports与exports
```
js原先是没有模块化这个概念的，这使得JS很难像其他语言如java/python/php那样来编写模块化的应用程序。因此ES6以及NodeJS都对这方面特性做了增强。
NodeJS为每个单独的JS文件生成了默认的Module对象，该对象用来表示文件执行上下文。

通过Module.exports来定义该模块能输出的对象
exports应该是module.exports的一个便捷写法的引用
exports是module.exports的一个引用，exports指向的是module.exports
两种方式不要混用
module.exports和exports是导出，导入的时候使用require
具体使用方式的区别请看node-basics/03-modules/03-custom/name.js
```

## 四、内置模块
```
这里介绍几个常用的内置模块：url，querystring，http，events，fs，stream，readline，crypto，zlib
```
### 1、url
#### 1.1、parse
```
url.parse是把一个url链接解析成一个对象
url.parse(urlString[,parseQueryString[,slashesDenoteHost]])
const url = require('url')
const urlString = 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
const parseStr = url.parse(urlString)
console.log(parseStr)
<!-- 结果如下 -->
cheese - Url {
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
```
#### 1.2、format
```
url.format正好相反，把一个对象解析成一个url字符串
url.format(urlObject)

const url = require('url')
const urlObject = {
    protocol:'https',
    slashes:true,
    auth:null,
    host:'www.baidu.com:443',
    port:'443',
    hostname:'www.baidu.com',
    hash:'#tag=110',
    search:'?id=8&name=mouse',
    query:{id:'8',name:'mouse'},
    pathname:'/ad/index.html',
    path:'/ad/index.html?id=8&name=mouse',
    href:'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
}
const parseObj = url.format(urlObject);
console.log(parseObj);
<!-- 打印结果 -->
https://www.baidu.com:443/path/index.html?id=2#tag=3
```
### 2、querystring
```
querystring.stringify
querystring.parse
querystring.escape
querystring.unescape
```
### 3、http/https
#### 3.1、get
```
var http = require('http')
var https = require('https')

// 1、接口  2、跨域
const server = http.createServer((request,response)=>{
   var url = request.url.substr(1)

   var data = ""

   response.writeHeader(200,{
       'content-type':'application/json;charset=utf-8',
       'Access-Control-Allow-Origin':'*'
   })

   https.get('https://m.lagou.com/listmore.json$(url)',(res)=>{
       res.on('data',(chunk)=>{
           data += chunk
       })
       res.on('end',()=>{
           response.end(JSON.stringfy({
               ret:true,
               data
           }))
       })
   })
})
```
#### 3.2、post: 服务器提交（攻击）
```
const https = require('https')
const querystring = require('querystring')
const postData = querystring.stringify({
    province:'上海',
    city:'上海',
    district:'宝山区',
    address:'同济支路199号',
    latitude:43.0,
    longitude:160.0,
    message:'求购一条小鱼',
    contact:'136666666',
    type:'sell',
    time:1571217561
})

const options = {
    protocol:'https:',
    hostname:'ik9hkddr.qcloud.la',
    method:'POST',
    port:443,
    path:'/index.php/trade/add_item',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':Buffer.byteLength(postData)
    }
}

function doPost(){
    let data
    let req = https.request(options,res=>{
        res.on('data',chunk=>data+=chunk)
        res.on('end',()=>{
            console.log(data)
        })
    })
    req.write(postData)
    req.end()
}
```
#### 3.3、跨域: jsonp
```
利用浏览器请求js文件不受同源策略限制的机制，js、jpg、png、css等这些文件都不受同源策略的限制。 例如在script中的src引入的CDN链接，就是一种jsonp
前后端协商定义函数的名字和传入的参数，然后利用script中的src属性，例如：
<script src="http://localhost:8080/api/data?cb=getData"></script>
这样就请求了localhost:8080/api/data这个接口，参数是cb=getData，后端返回的是
res.write(`${urlObj.query.cb}("hello")`)，这样返回之后就直接执行getData（）
所以前后端定义好getData

const http = require('http')
const url = require('url')

const app = http.createServer((req,res)=>{
    let urlObj = url.parse(req.url,true)
    switch(urlObj.pathname){
        case '/api/user':
        res.end(`${urlObj.query.cb}({'name':"gp145"})`)
        break
    default:
        res.end('404.')
        break;    
    }
})
app.listen(8080,()=>{
    console.log('localhost:8080')
})
```
#### 3.4、跨域: CORS
```
在后端 最主要的是设置  'Access-Control-Allow-origin':'*'
res.writeHead(200,{
    'content-type':'application/json',
    'Access-Control-Allow-origin':'*'
})

const http = require('http')
const url = require('url')
const querystring = require('querystring')

const app = http.createServer((req,res)=>{
    let data = ''
    let urlObj = url.parse(req.url,true)
    res.writeHead(200,{
        'content-type':'application/json;charset=utf-8',
        'Access-Control-Allow-Origin':'*'
    })
    req.on('data',(chunk)=>{
        data += chunk;
    })
    req.on('end',()=>{
        responseResult(querystring.parse(data))
    })
    function responseResult(data){
        switch(urlObj.pathname){
            case '/api/login':
               res.end(JSON.stringfy({
                   message:data
               }))
               break
            default:
               res.end('404.')
               break 
        }
    }

})
app.listen(8080,()=>{
    console.log('localhost:8080')
})

```
#### 3.5、跨域: middleware(http-proxy-middware)
```
如何设置代理去访问相关的接口
代理的含义是前端请求接口，在后端接到请求之后，把前面的域名部分替换成想要请求的服务器域名（服务器之间是不存在跨域的），然后后端发出请求，把请求回来的结果再传给前端。这样就解决了跨域的问题。
const http = require('http')
const proxy = require('http-proxy-middleware')

http.createServer((req,res)=>{
    let url = req.url
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
    })
    if(/^\/api/.test(url)){
        let apiProxy = proxy('/api',{
            target:'https://m.lagou.com',
            changeOrigin:true,
            pathRewrite:{
                '^/api':''
            }
        })

        <!-- http-proxy-middleware 在Node.js中使用的方法 -->
        apiProxy(req,res)
    }else{
        switch(url){
            case '/index.html':
               res.end('index.html')
               break
            case '/search.html':
               res.end('search.html')
               break
            default:
               res.end('[404]page not found')      
        }
    }
}).listen(8080)
```
#### 3.6、爬虫
```
现获取网页的html结构，然后使用cheerio把DOM解析成虚拟DOM结构，然后再进行操作，cheerio操作虚拟DOM类似于jquery，操作虚拟DOM的过程也叫数据筛洗。具体操作案例如下：

// 蜘蛛 爬虫
const http = require('http')
const https = require('https')
const cheerio = require('cheerio')
const url = require('url')

function filterData(data) {
    const $ = cheerio.load(data);
    $('.section-title').each((index,el)=>{
        // console.log(index);
        console.log($(el).text());
    })
    // console.log(data);
}

const server = http.createServer((req, res) => {
    let data = ''
    https.get('https://www.meizu.com', (result) => {
        result.on('data', (chunk) => {
            data += chunk
        })
        result.on('end', () => {
            filterData(data)
        })
    })

})
server.listen(8080, () => {
    console.log('localhost:8080');
})

```
### 4、Events
```
操作事件，例如 绑定事件，触发事件
const EventEmitter = require('events')
class MyEventEmitter extends EventEmitter{}
const event = new MyEventEmitter()
<!-- 绑定事件 -->
event.on('play',(movie)=>{
    console.log(movie)
})
<!-- 触发事件，并且传入参数 -->
event.emit('play','我和我的祖国')
```
### 5、File System
```
const fs = require('fs')
const fsP = require('fs').promises

<!-- 创建文件夹 -->
fs.mkdir('./logs',(err)=>{
    console.log('done.')
})

<!-- 文件夹改名 -->
fs.rename('./logs','./log',()=>{
    console.log('done.')
})

<!-- 删除文件夹 -->
fs.rmdir('./log',()=>{
    console.log('done.')
})

<!-- 写内容到文件里 -->
fs.writeFile(
    './logs/log1.txt',
    'hello',
    <!-- 错误优先的回调函数 -->
    (err)=>{
        if(err){
            console.log(err.message)
        }else{
            console.log('文件创建成功')
        }
    }
)

<!-- 读取文件内容 -->
fs.readFile('./log/log1.txt','utf-8',(err,data)=>{
    console.log('读取文件')
})

<!-- 删除文件 -->
fs.unlink('./log/log1.txt',(err)=>{
    console.log('删除文件')
})

<!-- 批量写文件 -->
for(var i = 0; i < 10; i++){
    fs.writeFile(`./logs/log-${i}.txt`,`文件内容为${i}`,(err)=>{
        console.log('批量写入文件')
    })
}

<!-- 读取文件/目录信息 -->
fs.readdir('./',(err,data)=>{
    data.forEach((value,index)=>{
        fs.stat(`./${value}`,(err,stats)=>{
            console.log(value+'is'+(stats.isDirectory()?'directory':'file'))
        })

    })
})

// 批量读取文件的内容,  递归调用
function readDir(dir){
    fs.readdir(dir,(err,content)=>{
        content.forEach((value,index)=>{
            let joinDir = `${dir}/${value}`
            fs.stat(joinDir,(err,stats)=>{
                // stats.isDirectory用来判断是否是文件夹
                if(stats.isDirectory()){
                    readDir(joinDir)
                }else{
                    fs.readFile(joinDir,'utf-8',(err,content)=>{
                        console.log(content);
                    })
                }
            })
        })
    })

}
readDir('./')

<!-- 同步读取文件 -->
try{
    const content = fs.readFileSync('./logs/log-1.txt','utf-8')
    console.log(content)
    console.log(0)
}catch(e){
    console.log(e.message)
}
console.log(1)

<!-- 异步读取文件： 方法一 -->
fs.readFile('./logs/log-0.txt','utf-8',(err,content)=>{
    console.log(content)
    console.log(0)
})

<!-- 异步读取文件： 方法二 -->
fs.readFile('./logs/log-0.txt','utf-8').then(result=>{
    console.log(result)
})

<!-- 异步读取文件： 方法三 -->
function getFile(){
    return new Promise((resolve)=>{
        fs.readFile('./logs/log-0.txt','utf-8',(err,data)=>{
            resolve(data)
        })
    })
}
;(async ()=>{
    console.log(await getFile())
})()

<!-- 异步读取文件：方法四 -->
const fsP = require('fs').promises;
const fsp = fsP.readFile('./logs/log1.txt','utf-8').then((result)=>{
  console.log(result)
})
console.log(fsP)

// watch 监测文件变化
fs.watch('./logs/log-0.txt',()=>{
    console.log(0)
})
```
### 6、Stream
```
文件流
流是Node.js中处理流数据的抽象接口。stream模块提供了一个用于实现stream接口的API。
const fs = require('fs')

const readstream = fs.createReadStream('./note.txt')
const writestream = fs.createWriteStream('./note2.txt')

writestream.write(readstream)
```
### 7、Zlib
```
压缩文件
const fs = require('fs')
const zlib = require('zlib')

const gzip = zlib.createGzip()
const readstream = fs.createReadStream('./note.txt')
const writestream = fs.createWriteStream('./note.gzip')

readstream.pipe(gzip).pipe(writestream)

writestream.write(readstream)
```
### 8、ReadLine
```
eadline模块提供了一个从可读流(比如process.stdin)逐行读取数据的接口。它可以通过以下方式访问:
const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('What do you think of Node.js?',(answer)=>{
    <!-- TODO:Log the answer in a database -->
    console.log('Thank you for your valuable feedback:${answer}')

    rl.close()
})
```
### 9、Crypto
```
加密的操作
const crypto = require('crypto')
const secret = 'abcdefg'
const hash = crypto.createHeac('sha256',secret)
                   .update('I love you')
                   .digest('hex')
console.log(hash)                   
```
## 五、路由
```
var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
    switch(req.url){
        case '/home':
          res.write('home')
          res.end()
          break
        case '/mine':
          res.write('mine')
          res.end()
          break
        case '/login':
          res.readFile('./static/login.html',(error,data)=>{
              if(error) throw error
              res.write(data)
              res.end()
          })
          break
        case '/fulian.jpg':
          res.readFile('./static/fulian.jpg','binary',(error,data)=>{
              if(error) throw error
              res.write(data,'binary')
              res.end()
          })
          break
        default:
          break      
    }
}).listen(8000,'localhsot',()=>{
    console.log('服务器运行在：http://localhost:8000')
})
```
## 六、静态资源服务
### 1 readStaticFile
/modules/readStaticFile.js
```
// 引入依赖的模块
var path = require('path')
var fs = require('fs')
var mime = require('mime')

function readStaticFile(res,filePathname){
    var ext = path.parse(filePathname).ext
    var mimeType = mime.getType(ext)

    // 判断路径是否有后缀，有的话则说明客户端要请求的是一个文件
    if(ext){
        // 根据传入的目标文件路径来读取对应文件
        fs.readFile(filePathname,(err,data)=>{
            // 错误处理
            if(err){
                res.writeHead(404,{"Content-Type":"text/plain"})
                res.write("404 - NOT FOUND")
                res.end()
            }else{
                res.writeHead(200,{"Content-Type":mimeType})
                res.write(data)
                res.end()
            }
        })
        // 返回true 表示，客户端想要的是静态文件
        return true
    } else {
        // 返回false 表示，客户端想要的不是静态文件
        return false
    }
}
```
### 2 server
/server.js
```
// 引入相关的模块
var http = require('http')
var path = require('path')
var fs = require('fs')
var readStaticFile = require('./modules/readStaticFile')

// 搭建 HTTP 服务器
var server = http.createServer((req,res)=>{
    var urlObj = url.parse(req.url)
    var urlPathname = urlObj.pathname;
    var filePathname = path.join(__dirname,"/public",urlPathname);

    // 读取静态文件
    readStaticFile(res,filePathname);
})

// 在3000 端口监听请求
server.listen(3000,()=>{
    console.log("服务器运行中");
    console.log("正在监听 3000 端口");
})
```
# 02-Yarn使用入门
```
Yarn对你的代码来说是一个包管理器。它可以让你使用并分享全世界开发者的（例如JavaScript）代码。
Yarn能够快速、安全、并可靠地完成这些工作，所以你不用有任何担心。

通过Yarn你可以使用其他开发者针对不同问题的解决方案，使自己的开发过程更简单。

代码通过包（package）（或者称为模块（module））的方式来共享。一个包里面包含所有需要共享的代码，
以及描述包信息的文件，称为package.json.
```
## 1、安装
这里我使用的是 npm 的安装方式
```
npm install -g yarn
```
查看是否安装成功
```
yarn -v
```
常用命令
```
# 初始化一个项目
yarn init
# 装包
yarn add packagename
yarn add packagename --dev
# 更新包
yarn upgrade packagename
# 删除包
yarn remove packagename
# 安装所有包
yarn
yarn install
# 发布包
yarn publish
# 查看包的缓存列表
yarn cache list
# 全局安装包 == npm -g
yarn global
```
## 2、Yarn使用方法
现在Yarn已经安装完毕，可以开始使用了。以下是一些你需要的最常用的命令：
### 2.1 初始化一个新项目
```
yarn init
```
### 2.2 添加依赖包
```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```
### 2.3 将依赖项添加到不同依赖项类别中
分别添加到devDependencies、peerDependencies和optionalDependencies类别中：
```
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional

```
devDependencies、peerDependencies和optionalDependencies区别
```
在一个Node.js项目中，package.json几乎是一个必须的文件，它的主要作用就是管理项目中所使用的外部依赖包，同时它也是npm命令的入口文件。

npm 目前支持以下几类依赖包管理：
dependencies
devDependencies
peerDependencies
optionalDependencies
bundledDependencies/bundleDependencies
```
dependencies
```
应用依赖，或者叫业务依赖，这是我们最常用的依赖包管理对象！它用于指定应用依赖的外部包，这些依赖是应用发布后正常执行时所需要的，但不包含测试是或者本地打包时所使用的包。
```
devDependencies
```
开发环境依赖，仅次于dependencies的使用频率！它的对象定义和dependencies一样，只不过它里面的包只用于开发环境，不用于生产环境，这些包通常是单元测试或者打包工具等，例如gulp, grunt, webpack, moca, coffee等
```
peerDependencies
```
同等依赖，或者叫同伴依赖，用于指定当前包（也就是你写的包）兼容的宿主版本。如何理解呢？试想一下，我们编写一个gulp的插件，而gulp却有多个主版本，我们只想兼容最新的版本，此时就可以用同等依赖（peerDependencies）来指定。
{
    "name":"gulp-my-plugin",
    "version":"0.0.1",
    "peerDependencies":{
        "gulp":"3.x"
    }
}
```
optionalDependencies
```
可选依赖，如果有一些依赖包即使安装失败，项目仍然能够运行或者希望npm继续运行，就可以使用optionalDependencies。另外optionalDependencies会覆盖dependencies中的同名依赖包，所以不要在两个地方都写。
```
bundledDependencies/bundleDependencies
```
打包依赖，bundledDependencies是一个包含依赖包名的数组对象，在发布时会将这个对象中的包打包到最终的发布包里。
```


升级依赖包
```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```
移除依赖包
```
yarn remove [package]
```
安装项目的全部依赖
```
yarn
```
或者
```
yarn install
```
# Express
基于Node.js平台，快速、开放、极简的web开发框架。
```
npm install express --save
```
## 一、特色
### 1、web应用
```
Express是一个基于Node.js平台的极简、灵活的web应用开发框架，它提供一系列强大的特性，帮助你创建各种web和移动设备应用。
```
### 2、API
```
丰富的HTTP快捷方法和任意排列组合的Connect中间件，让你创建健壮，友好的API变得即快速又简单。
```
### 3、性能
```
Express不对Node.js已有的特性进行二次抽象，我们只是在它之上扩展了web应用所需的基本功能。
```
## 一、安装
首先假定你已经安装了Node.js,接下来为你的应用创建一个目录，然后进入此目录并将其作为当前工作目录。
npm view express versions 查看express所有的版本
```
mkdir myapp
cd myapp
```
## 二、模板
express有哪些模板
```
express template
-ejs
-pu
-jade
-art-template

```

## 三、渲染
页面渲染（render）
```
- SSR （Server Side Render） 服务器端渲染（后端渲染）
- CSR  (Client Side Render) 客户端渲染（前端渲染）
```
cms  内容管理系统


# MongoDB
## 1、MongoDB是什么
```
MongoDB 是一个基于分布式文件存储的数据库。由C++语言编写。旨在为WEB应用提供可扩展的高性能数据存储解决方案。

它的特点：高性能、易部署、易使用，存储数据非常方便。
```

### 1.1 下面是和mySQL的对比
SQL术语/概念|MongoDB术语/概念|解释/说明
-|-|-
database|database|数据库
table|collection|数据库表/集合
row|document|数据记录行/文档
column|field|数据字段/域
index|index|索引
table joins| |表连接，MongoDB不支持
primary key|primary key|主键，MongoDB自动将_id字段设置为主键

### 1.2 MongoDB术语/概念
id|user_name|email|age|city
-|-|-|-|-
1|Mark Hanks|mark@abc.com|25|Los Angeles
2|Richard Peter|richard@abc.com|31|Dallas
```
{
    "_id":ObjectedId("5146bb52d852"),
    "age":25,
    "city":"Los Angeles",
    "email":"mark@abc.com",
    "user_name":"Mark Hanks",
}
{
    "_id":ObjectedId("5146bb52d853"),
    "age":31,
    "city":"Dallas",
    "email":"richard@abc.com",
    "user_name":"Richard Peter",
}
```
### 1.3 MongoDB数据库
```
一个mongodb中可以建立多个数据库。
MongoDB的默认数据库为“db”，该数据库存储在data目录中。

MongDB的单个实例可以容纳多个独立的数据库，每一个都有自己的集合和权限，不同的数据库也放置在不同的文件中。
```
### 1.4 MongoDB集合
```
集合就是MongDB文档组，类似于RDBMS（关系数据库管理系统：Relation DataBase Management System）中的表格

集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。
```
### 1.5 MongoDB文档
```
文档是一个键值（key-value）对（即BSON）。MongoDB的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，这与关系型数据库有很大的区别，也是MongoDB非常突出的特点。

一个简单的文档例子如下：
{"genres":["犯罪","剧情"],"title":"肖申克的救赎"}
```
### 1.6 MongoDB数据类型
数据类型|描述
-|-
String|字符串。存储数据常用的数据类型。在MongoDB中，UTF-8编码的字符串才是合法的。
Integer|整型数值。用于存储数值。根据你所采用的服务器，可分为32位或64位。
Boolean|布尔值。用于存储布尔值（真/假）。
Double|双精度浮点值。用于存储浮点值。
Min/Max keys|将一个值与BSON（二进制的JSON）元素的最低值和最高值相对比。
Arrays|用于将数组或列表或多个值存储为一个键。
Timestamp|时间戳。记录文档修改或者添加的具体时间。
Object|用于内嵌文档。
Null|用于创建空值。
Symbol|符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。
Date|日期时间。用UNIX时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建Date对象，传入年月日信息。
Object ID|对象ID。用于创建文档的ID。
Binary Data|二进制数据。用于存储二进制数据。
code|代码类型。用于在文档中存储JavaScript代码。
Regular expression|正则表达式类型。用于存储正则表达式

### 1.7 MongoDB数据库常用命令
```
（1）Help查看命令提示
help
db.help()
db.test.help()
db.test.find().help()
（2）创建/切换数据库
use music
（3）查询数据库
show dbs
（4）查看当前使用的数据库
db/db.getName()
（5）显示当前DB状态
db.stats()
（6）查看当前DB版本
db.version()
（7）查看当前DB的链接机器地址
db.getMongo()
（8）删除数据库
db.dropDatabase()
```
## 2、MongoDB的安装和使用流程
### 2.1 安装数据库
[安装教程](https://docs.mongodb.com/manual/)
### 2.2 启动数据库
```
1、windows
mongod --dbpath d:/data/db
mongo

2、mac
mongod --config /usr/local/etc/mongod.conf
mongo

进入到bin目录之后，用 ./mongo启动
```
### 2.3 数据库操作
```
use gp145
db/db.getName()
show dbs
db.createCollection('movies')
db.stats()
db.version()
db.getMongo() // connection to 127.0.0.1:27017
db.dropDatabase()
```
### 2.4 Collection集合操作
```
(1)创建一个集合
db.createCollection("collName",{size:20,capped:true,max:100});
db.collName.isCapped(); // 判断集合是否为定容量
(2)得到指定名称的集合
db.getCollection("account");
(3)得到当前db的所有集合
db.getCollectionNames();
(4)显示当前db所有集合的状态
db.printCollectionStats();
```
### 2.5 添加、修改与删除集合数据
```
(1)添加
db.users.save({name:'zhangsan',age:25,sex:true});
(2)修改
第一个参数表示条件，你要修改谁，第二个参数表示要修改成什么内容，第三个参数表示如果找不到就创建（true的情况会创建），第四个参数表示匹配所有的（如果有多个数据的name是一样的，都会更新数据里面的参数），
db.users.update({age:25},{$set:{name:'changeName'}},false:true});
// 相当于：update users set name = ’changeName‘ where age = 25;
db.users.update({name:'Lisi'},{$inc:{age:50}},false:true});
// 相当于：update users set age = age + 50 where name = 'Lisi';
db.users.update({name:'Lisi'},{$inc:{age:50},$set:{name:'hoho'}},false:true});
// 相当于：update users set age = age + 50,name = 'hoho' where name = 'Lisi';
(3)删除
db.users.remove({age:132})
```
### 2.6 集合数据查询
```
(1)查询所有记录
db.userInfo.find()
// 相当于：select * from userInfo
(2)查询去重后数据
db.userInfo.distinct("name")
// 相当于：select distict name from userInfo
(3)查询age=22的记录
db.userInfo.find({"age":22})
// 相当于：select * from userInfo where age = 22
(4)查询age>22的记录
db.userInfo.find({age:{$gt:22}})
// 相当于：select * from userInfo where age > 22
(5)查询age<22的记录
db.userInfo.find({age:{$lt:22}})
// 相当于：select * from userInfo where age < 22
(6)查询age>=25的记录
db.userInfo.find({age:{$gte:25}})
// 相当于：select * from userInfo where age >= 25
(7)查询age<=25的记录
db.userInfo.find({age:{$lte:25}})
// 相当于：select * from userInfo where age <= 25
(8)查询age>=23并且age<=26
db.userInfo.find({age:{$gte:23,$lte:26}})
(9)查询name中包含mongo的数据
db.userInfo.find({name:/mongo/})
// 相当于：%%  
// select * from userInfo where name like '%mongo%'
(10)查询name中以mongo开头的数据
db.userInfo.find({name:/^mongo/})
// 相当于：select * from userInfo where name like 'mongo%'
(11)查询指定列name、age数据
db.userInfo.find({},{name:1,age:1})
// 相当于：select name,age from userInfo
(12)查询指定列name、age的数据，age>25
db.userInfo.find({age:{$gt:25}},{name:1,age:1})
// 相当于：select name,age from userInfo where age > 25
(13)按照年龄排序
升序：db.userInfo.find().sort({age:1});
降序：db.userInfo.find().sort({age:-1});
(14)查询name=zhangsan,age=22的数据
db.userInfo.find({name:'zhangsan',age=22})
// 相当于：select * from userInfo where name = 'zhangsan' and age = '22'
(15)查询前5条数据
db.userInfo.find().limit(5);
// 相当于：select top 5 * from userInfo
(16)查询10条以后的数据
db.userInfo.find().skip(10);
(17)查询在5-10之间的数据
db.userInfo.find().limit(10).skip(5);
(18)or与查询
db.userInfo.find({$or:[{age:22},{age:25}]});
(19)查询第一条数据
db.userInfo.findOne();
(20)查询某个结果集的记录条数
db.userInfo.find({age:{$gte:25}}).count();
```
### JWT
```
json web token
```
### 非对称秘钥生成
```
openssl
生成秘钥
openssl > genrsa -out rsa_private_key.pem 2048

根据私钥生成公钥
openssl > rsa -in rsa_private_key.pem -pubout -out rsa_public_keys.pem
```
# Socket
## Socket 简介和通信流程
### 什么是Socket？
```
网络上的两个程序通过一个双向的通信连接实现数据的交换，这个连接的一端称为一个socket
```
### Socket通信流程
![通信流程图](https://github.com/814657780/node-summary/blob/main/images/socket.png)

### 基于net模块实现socket
#### 1、基于Net模块的Socket编程
##### 1.1 ServerSocket.js
```
const net = require('net')

const server = new net.createServer()

let clients = {}
let clientName = 0

server.on('connection',(client)=>{
    client.name = ++clientName
    clients[client.name] = client

    client.on('data',msg=>{
        <!-- console.log('客户端传来：' + msg) -->
        broadcast(client, msg.toString())
    })

    client.on('error',(e)=>{
        console.log('client error' + e)
        client.end()
    })

    client.on('close',(data)=>{
        delete clients[client.name]
        console.log(client.name + '下线了')
    })
})
function broadcast(client,msg){
    for(var key in clients){
        clients[key].write(client.name+'说：'+msg)
    }
}

server.listen(9000,'localhost')
```
##### 1.2 ClientSocket.js
```
const net = require('net')
const readline = require('readline')

var port = 9000
var host = '127.0.0.1'

var socket = new net.Socket()
socket.setEncoding = 'UTF-8'
socket.connect(port,host,()=>{
    socket.write('hello.')
})
socket.on('data',(msg)=>{
    console.log(msg.toString())
    say()
})
socket.on('error',(err)=>{
    console.log('error'+err)
})
socket.on('close',()=>{
    console.log('connection closed')
})
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function say(){
    rl.question('请输入：\n',inputMsg=>{
        if(inputMsg != 'bye'){
           // socket.write(inputMsg+'\n')
        }else{
            socket.destroy()
            rl.close()
        }
    })
}
```
### webSocket
#### 基于WebSocket的Socket编程
##### 2.1 WebSocketServer.js
```
const WebSocket = require('ws')
const ws = new WebSocket.Server({port:8081})

let clients = {}
let clientName = 0

ws.on('connection',client=>{
    client.name = ++clientName
    clients[client.name] = client

    client.on('message',msg=>{
        broadcast(client,msg)
    })

    client.on('close',()=>{
        delete clients[client.name]
        console.log(client.name + '离开了~')
    })
})

function broadcast(client,msg){
    for(var key in clients){
        client[key].send(client.name + '说' + msg)
    }
}
```
##### 2.2 index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>webSocket</title>
    <script src="WsClient.js" charset="utf-8"></script>
</head>
<body>
    <h1>gp 交流区</h1>
    <div id="content" name="name" style="overflow-y: scroll;width:400px;height:300px;"></div>
    <div>
        <input type="text" id="msg" style="width: 200px;">
    </div>
    <button id="submit">提交</button>
    <script>
        document.querySelector("#submit").addEventListener('click',function(){
           var msg2 = msg.value
           ws.send(msg2)  // 核心代码，将表单里的数据提交给server端
           msg.value = ''
        },false)
    </script>
</body>
</html>
```
##### 2.3 WsClient.js
```
const ws = new WebSocket('ws://localhost:8081/')

ws.onopen = () =>{
    ws.send('大家好！')
}
ws.onmessage = msg =>{
    const content = document.getElementById('content')
    content.innerHTML += msg.data + '<br/>'
}

ws.onerror = (err)=>{
    console.log(err)
}

ws.onclose = (err)=>{
    console.log('closed~')
}
```
### 第三方的工具 Socket.io
#### 基于Socket.io的Socket编程
```
主要是有些浏览器不支持HTML5，导致webSocket使用不了，所以要用Socket.io这个第三方工具。
```
##### 3.1 SocketIoServer.js
```
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// app.use(express.static(__dirname+'/client'))

io.on('connection',socket=>{
    setInterval(()=>{
        socket.emit('list','abc')
    },1000)
    socket.broadcast.emit('list','test');
    socket.on('backend',msg=>{
        console.log(msg)
    })
    socket.on('receive',msg=>{
        console.log(msg)
    })
})
```
# Node.js项目
### 前端（Front end）
- 前端工程化环境（webpack）
- CSS预处理工具（sass）
- JS模块化：ES Module，CommonJS Module
- JS库：jQuery
- SPA：single page application，路由：SME-Router
- UI组件库：Bootstrap(AdminTE)
- RMVC: Art-template // 模板
### 后端（Back end）
- Node.js
- Express
- MongoDB（Mongoose）// 驱动程序
- EJS
- jwt(json web token)
- RMVP
### 开发架构
- 前后端分离的开发架构


#### UI组件库
arttemplate
- 官方网站：http://aui.github.io/art-template/webpack/
- 使用方法
```
module.exports = {
    module:{
        rules:[
            {
                test: /\.jpg$/,
                loader:"file-loader"
            },{
                test: /\.png$/,
                loader:"url-loader?mimetype=image/png"
            },{
                test: /\.arts$/,
                loader:"art-template-loader",
                options:{
                    // art-template options (if necessary)
                    // @see https://github.com/aui/art-template
                }
            }
        ]
    }
}
```
##### admin-lte
- https://adminlte.xueyao.org/pages/index.html
##### PM2
- 官方网站：http://pm2.keymetrics.io/
- 官方网站：https://www.jianshu.com/p/6dbe6fa04520
- 关键配置：http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/  注意：可以在args参数里配置脚本参数
执行pm2 ecostyem，会生成一个ecosystem.config.js文件 将以下代码替换module.exports后面的部分

#####  cookie和session登录的方案
```
后端往前端种cookie
const sessionId = randomstring.generate()
res.append('Set-Cookie', `sessionId=${sessionId}; Path=/; HttpOnly`)
前端不需要做处理，请求时会cookie（后端种下的cookie）自动带上（浏览器做的，相当于浏览器和后端的一个协定），即使一个图片请求也会带上，所以关于网站性能优化的方法有减少http这个方法（因为每次http请求都会把所有的请求头资源发送过去，携带的资源特别多，所以请求会慢，网站加载会慢）
cookie跟域名是保持一致的，只要是在这个域名下，cookie就是一定的，
```
#####  token登录的方案












