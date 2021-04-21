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
    // 获取列表数据并且进行排序  sort排序
    return Users.find().sort({_id:-1})
}

module.exports = {signup,findUser,findList}