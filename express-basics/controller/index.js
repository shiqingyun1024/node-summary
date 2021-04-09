const list = (req,res,next)=>{
    // 返回html页面，这个叫ssr（服务端渲染）
    // let data = '<ul>'
    // for(var i = 0; i < 100; i++){
    //     data += `<li>line ${i}</li>` 
    // }
    // data += '</ul>'

    // 只返回数据
    let data = {
        ret:true,
        data:[]
    }
    for(var i = 0; i < 100; i++){
        data.data.push(`line${i}`) 
    }

    res.send(data)
}

exports.list = list