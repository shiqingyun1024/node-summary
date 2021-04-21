// 操作数据库定义的方法
const Users = require('../utils/db')

// 校验唯一性
const findUser = (username)=>{
    return Users.findOne({username})
}

const signup = ({username,password})=>{
    const users = new Users({
        username,
        password
    })
    // 返回的是一个promise对象
    return users.save()
    // console.log(result);  
}

const findList = ()=>{
    return Users.find()
}

module.exports = {signup,findUser,findList}