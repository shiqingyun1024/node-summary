// 鉴权中间键
const auth = (req,res,next)=>{
    let token = req.get('X-Access-Token')
    try{
        let result = verify(token)
        next()
    }catch(e){
        res.render('fail',{
            data:JSON.stringify({
                message:'请登录'
            })
        })
    }
}

module.exports = {auth};