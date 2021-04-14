var template = require('art-template');
const path = require("path")
const fs = require('fs')

var jwt = require('jsonwebtoken');


const {dataArray} = require('../model/list')


const list = (req,res,next)=>{
    // 返回html页面，这个叫ssr（服务端渲染）
    // let data = '<ul>'
    // for(var i = 0; i < 100; i++){
    //     data += `<li>line ${i}</li>` 
    // }
    // data += '</ul>'

    // 只返回数据
    // let data = {
    //     ret:true,
    //     data:[]
    // }
    // for(var i = 0; i < 100; i++){
    //     data.data.push(`line${i}`) 
    // }

    // res.send(data)


    // 现在有了模板引擎，可以按照模板引擎的写法来   后面这一部分数据放在model中了
    // let dataArray = []

    // for(var i = 0; i < 100; i++){
    //     dataArray.push('line' + i)
    // }


    // res.set('content-type','appliction/json;charset=utf-8')

    // res.render('list',{
    //     data:JSON.stringify(dataArray)
    // })

    // res.render('list-html',{
    //     data:dataArray
    // })

    // 后端进行渲染，使用模板引擎
    var html = template(path.join(__dirname, '../view/list-html.art'), {
        data: dataArray
    });
    fs.writeFileSync(path.join(__dirname, '../public/list.html'),html)
    console.log(html);

    res.send("pages ok")
}

const token = (req,res,next)=>{
    // 对称加密
    // let token = jwt.sign({ username: 'admin' }, 'hahaha');
    // let decoded = jwt.verify(token, 'hahaha');
    // console.log(decoded.foo) // bar
    // res.send(decoded)

    // 非对称加密
    let privateKey = fs.readFileSync('../keys/rsa_private_key.pem');
    let token = jwt.sign({ username: 'admin' }, privateKey);
    res.send(token)
}

module.exports = {
    list,token
}