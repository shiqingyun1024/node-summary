import signinTpl from '../views/signin.art'
const htmlSignin = signinTpl({})
const _handleSubmit = (router) => {
    return (e) => {
        e.preventDefault()
        // 提交表单
        const data = $('#signin').serialize()
        $.ajax({
            url: '/api/users/signin',
            type: 'post',
            data,
            success(res,textStatus,jqXHR) {
                const token = jqXHR.getResponseHeader('X-Access-Token')
                localStorage.setItem('lg-token',token)
                console.log(jqXHR);
                console.log(res);
                // if (res.ret) {
                //     router.go('/index')
                // }
            }
        })
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