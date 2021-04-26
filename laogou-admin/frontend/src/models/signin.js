import signinTpl from '../views/signin.art'
const htmlSignin = signinTpl({})
// 登录之后渲染数据
const signin = router => {
    return (req, res, next) => {
        res.render(htmlSignin)
        $("#signin").on('submit', _handleSubmit(router))
    }
}