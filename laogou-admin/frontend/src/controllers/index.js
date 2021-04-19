import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'
import usersTpl from '../views/users.art'
const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})

const _handleSubmit = (router)=>{
    return (e)=>{
        e.preventDefault()
        router.go('/index')
    }
}
const signin = router=>{
    return (req, res, next) => {
        res.render(htmlSignin)
        $("#signin").on('submit',_handleSubmit(router))
    }
}
const index = router=>{
    return (req, res, next) => {
        res.render(htmlIndex)
        // 填充用户列表
        $('#content').html(usersTpl());
    }
}
export {
    signin,
    index
}