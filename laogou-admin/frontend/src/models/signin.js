import signinTpl from '../views/signin.art'
const htmlSignin = signinTpl({})
// 登录之后渲染数据
const signin = router => {
    return (req, res, next) => {
        res.render(htmlSignin)
        $("#signin").on('submit', _handleSubmit(router))
    }
}

const _handleSubmit = (router) => {
    return (e) => {
        e.preventDefault()
        // 提交表单
        const data = $('#signin').serialize()
        $.ajax({
            url: '/api/users/signin',
            // headers:{
            //     'X-Access-Token':localStorage.getItem('lg-token')
            // },
            type: 'post',
            data,
            success(res) {
                if (res.ret) {
                    router.go('/index')
                }
            }
        })
    }
}

export default signin