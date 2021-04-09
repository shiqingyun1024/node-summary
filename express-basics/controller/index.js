const list = (req,res,next)=>{
    let data = '<ul>'
    for(var i = 0; i < 100; i++){
        data += `<li>line ${i}</li>` 
    }
    data += '</ul>'
    res.send(data)
}

exports.list = list