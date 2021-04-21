const usersModel = require('../models/users')
const { hash } = require('../utils/tools')

// 注册用户
const signup = async (req, res, next) => {
    res.set('content-type','application/json;charset=utf-8')
    const { username, password } = req.body
    
    let bcryptPassword = await hash(password);

    // 判断用户是否存在
    let findResult = await usersModel.findUser(username)
    console.log(findResult);
    if (findResult) {  // 用户存在
      res.render('fail',{
          data:JSON.stringify({
            message:'用户名已存在。'
        })
      })
    } else {// 用户不存在
        // 数据库里没有这个用户，开始添加用户
        let result = await usersModel.signup({
            username,
            password:bcryptPassword
        })
        
        res.render('succ', {
            data: JSON.stringify({
                message:'注册成功！'
            })
        })
    }

}

module.exports = signup