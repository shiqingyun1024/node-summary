const usersModel = require('../models/users')
const {hash,compare} = require('../utils/tools')
const randomstring = require("randomstring");
// const cookieSession = require('cookie-session')

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

// 用户登录
const signin = async (req, res, next)=>{
    // post请求,请求中传过来的password，例如123
    const { username,password } = req.body;

    let result = await usersModel.findUser(username)
    console.log(result);
    // 验证用户是否是合法用户（密码是否正确）
    if(result){
        // 这个password是hash加密之后存在数据库里面的password
        let {password:hash} = result
        let compareResult = await compare(password,hash)
        if(compareResult){
            // const sessionId = randomstring.generate()
            // res.append('Set-Cookie', `sessionId=${sessionId}; Path=/; HttpOnly`)

            // console.log(req.session);
            req.session.username = username
            // app.use(cookieSession({
            //     name: 'session',
            //     keys: ['key1', 'key2']
            //   }))
            res.render('succ', {
                data: JSON.stringify({
                    username
                })
            })
            // req.session.username = username
            
        }else{
            res.render('fail', {
                data: JSON.stringify({
                    message: '用户名或密码错误'
                })
            })
        }
    }else{
        res.render('fail', {
            data: JSON.stringify({
                message: '用户名或密码错误'
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
    remove,
    signin
}