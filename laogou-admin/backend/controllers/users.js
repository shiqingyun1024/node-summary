const usersModel = require('../models/users')
const {
    hash
} = require('../utils/tools')

// 注册用户
const signup = async (req, res, next) => {
    res.set('content-type', 'application/json;charset=utf-8')
    const {
        username,
        password
    } = req.body

    let bcryptPassword = await hash(password);

    // 判断用户是否存在
    let findResult = await usersModel.findUser(username)
    console.log(findResult);
    if (findResult) { // 用户存在
        res.render('fail', {
            data: JSON.stringify({
                message: '用户名已存在。'
            })
        })
    } else { // 用户不存在
        // 数据库里没有这个用户，开始添加用户
        let result = await usersModel.signup({
            username,
            password: bcryptPassword
        })

        res.render('succ', {
            data: JSON.stringify({
                message: '注册成功！'
            })
        })
    }

}

// 用户列表
const list = async (req, res, next) => {
    res.set('content-type', 'application/json;charset=utf-8')
    const listResult = await usersModel.findList()
    res.render('succ', {
        data: JSON.stringify(listResult)
    })
}

// 删除用户
const remove = async (req, res, next) => {
    res.set('content-type', 'application/json;charset=utf-8')
    let {id} = req.body
    // 记住一定要加await   
    let result = await usersModel.remove(id)
    if (result) {
        res.render('succ', {
            data: JSON.stringify({
                message: '用户删除成功'
            })
        })
    }else{
        res.render('fail', {
            data: JSON.stringify({
                message: '用户删除失败'
            })
        })
    }
    


}

module.exports = {
    signup,
    list,
    remove
}