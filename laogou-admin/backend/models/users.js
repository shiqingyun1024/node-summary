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

// 获取列表数据，并进行排序
const findList = ()=>{
    // 获取列表数据并且进行排序  sort排序
    return Users.find().sort({_id:-1})
}

// 删除用户
const remove = id=>{
//    return Users.deleteOne({_id})
   return Users.findByIdAndRemove(id)
}

module.exports = {signup,findUser,findList,remove}