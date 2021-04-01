# node-summary
node相关的总结

## node的浏览器端调试
```
node --inspect --inspect-brk server.js
```
## node进程管理工具
```
- supervisor 
- nodemon // 本地常用
- forever 
- pm2
```

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
const https = require('https')
const http = require('http')
const cheerio = require('cheerio')

http.createServer((request,response)=>{
    response.writeHead(200,{
        'content-type':'application/json;charset=utf-8'
    })

    const options = {
        protocol:'https:',
        hostname:'manyan.com',
        method:'GET',
        port:443,
        path:'/index.php/trade/add_item',
        headers:{
           'Content-Type':'application/x-www-form-urlencoded',
           'Content-Length':Buffer.byteLength(postData)
        }
    }
})
```







