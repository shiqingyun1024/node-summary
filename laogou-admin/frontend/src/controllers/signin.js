import signinTpl from '../views/signin.art'
import { signin as signinModel } from '../models/signin'

const htmlSignin = signinTpl({})
const _handleSubmit = (router) => {
    return async (e) => {
        e.preventDefault()
        // 提交表单
        const data = $('#signin').serialize()
        let result = await signinModel(data)

        const token = result.res.jqXHR.getResponseHeader('X-Access-Token')
        localStorage.setItem('lg-token',token)
        if (result.res.ret) {
            router.go('/index')
        }
    }
}
// 登录之后渲染数据
const signin = router => {
    return (req, res, next) => {
        res.render(htmlSignin)
        $("#signin").on('submit', _handleSubmit(router))
    }
}

export default signin