const signupModel = require('../models/users')

// 注册用户
const signup = (req,res,next)=>{
    const {username,password} = req.body
    signupModel({
        username,
        password
    })
    res.render('succ',{
        data:JSON.stringify({
            username,
            password
        })
    })
}

module.exports = signup