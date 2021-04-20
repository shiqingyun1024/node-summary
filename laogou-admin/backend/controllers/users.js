const usersModel = require('../models/users')

// 注册用户
const signup = async (req,res,next)=>{
    const {username,password} = req.body

    // 判断用户是否存在
    let findResult = await usersModel.findUser(username)
    console.log(findResult);
    // let result = await usersModel.signup({
    //     username,
    //     password
    // })
    // console.log(result);
    // res.render('succ',{
    //     data:JSON.stringify({
    //         username,
    //         password
    //     })
    // })
}

module.exports = signup