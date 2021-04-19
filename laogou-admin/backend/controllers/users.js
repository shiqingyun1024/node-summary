// 注册用户
const signup = (req,res,next)=>{
    const {username,password} = req.body
    res.render('succ',{
        data:JSON.stringify({
            username,
            password
        })
    })
}

module.exports = signup