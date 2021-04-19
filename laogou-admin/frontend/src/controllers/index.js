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
const _signup = () =>{
    const data = $('#users-form').serialize()
    console.log(data);
    $('#users-close').click();
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
        // 点击保存，提交表单
        $('#users-save').on('click',_signup)
    }
}
export {
    signin,
    index
}