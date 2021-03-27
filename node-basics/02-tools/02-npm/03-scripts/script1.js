// 对比package.json中的scripts中的使用
// "runjs":"node script1.js & node script2.js" 
// 并行执行，不知道谁先执行完

// "runjs":"node script1.js && node script2.js"
// 串行执行，先执行script1.js 再执行script2.js

// "start":"node script3.js"
// 可以直接 npm start 不用写run

// "build":"echo $npm_package_config_env"
// 可以在package.json里面访问里面的属性    echo命令是linux中最基础的命令，也是很常用的命令，echo命令后面跟上要输出的文本

// "install":"git+https://git@gogs.pms.anyi-tech.com/anyi-front/anyi-ui.git#1.2.37"
// 直接安装git地址上的包

// "build:test": "cross-env NODE_ENV=production node anyiprod.js test",
// 我们在文件中可以通过 process.env.NODE_ENV 来获取到

console.log('1');

// 怎么能拿到package.json中定义的参数呢
// npm_package_这个是固定的写法，后面跟参数名,一定要精准的获取变量,如果获取对象会报undefined
// 前面一定要加process.env进程
// console.log(process);
console.log(process.env.npm_package_config_env);
// console.log(process.env.npm_package_config); // undefined