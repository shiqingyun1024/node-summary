const Users = require('../utils/db')

const signup = ({username,password})=>{
    const users = new Users({
        username,
        password
    })
    users.save()
}

module.exports = signup