import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'
import usersTpl from '../views/users.art'
import usersListTpl from '../views/users-list.art'
const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})

const _handleSubmit = (router)=>{
    return (e)=>{
        e.preventDefault()
        router.go('/index')
    }
}
// 
const _signup = () =>{
    // 提交表单
    const data = $('#users-form').serialize()
    $.ajax({
        url:'/api/users/signup',
        type:'post',
        data,
        success(res){
            _list();
        }
    })
    // 关闭模态框
    $('#users-close').click();
}

// 获取列表数据并渲染
const _list = () =>{
    $.ajax({
        url:'/api/users/list',
        success(result){
            $("#users-list").html(usersListTpl({
                data:result.data
            }))
        }
    })
}

const signin = router=>{
    return (req, res, next) => {
        res.render(htmlSignin)
        $("#signin").on('submit',_handleSubmit(router))
    }
}
const index = router=>{
    return (req, res, next) => {
        // 渲染首页
        res.render(htmlIndex)
        // 填充用户列表
        $('#content').html(usersTpl());

        // 渲染list
        _list()

        // 点击保存，提交表单
        $('#users-save').on('click',_signup)
    }
}
export {
    signin,
    index
}