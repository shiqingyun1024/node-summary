import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'
import usersTpl from '../views/users.art'
import usersListTpl from '../views/users-list.art'
import usersListPageTpl from '../views/users-pages.art'
const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})
const pageSize = 10;
let dataList = [];

const _handleSubmit = (router) => {
    return (e) => {
        e.preventDefault()
        router.go('/index')
    }
}
// 提交新增用户
const _signup = () => {
    // 提交表单
    const data = $('#users-form').serialize()
    $.ajax({
        url: '/api/users/',
        type: 'post',
        data,
        success(res) {
            // 添加数据后渲染
            _loadData()
        }
    })
    // 关闭模态框
    $('#users-close').click();
}

// 分页函数
const _pagination = data => {
    const total = data.length;
    const pageCount = Math.ceil(total / pageSize)
    const pageArray = new Array(pageCount)
    const htmlPage = usersListPageTpl({
        pageArray
    })
    $("#users-page").html(htmlPage)
    $("#users-page-list li:nth-child(2)").addClass('active')
    $("#users-page-list li:not(:first-child,:last-child)").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        _list($(this).index());
    })
}

// 请求数据
const _loadData = () => {
    $.ajax({
        url: '/api/users/',
        type: 'get',
        // async:false,
        success(result) {
            dataList = result.data;
            // 分页
            _pagination(result.data)
            _list(1);
        }
    })
}

// 获取列表数据并渲染
const _list = (pageNo) => {
    let start = (pageNo - 1) * pageSize
    $("#users-list").html(usersListTpl({
        data: dataList.slice(start, start + pageSize)
    }))
}

// 登录之后渲染数据
const signin = router => {
    return (req, res, next) => {
        res.render(htmlSignin)
        $("#signin").on('submit', _handleSubmit(router))
    }
}

// 初始化数据
const index = router => {
    return (req, res, next) => {
        // 渲染首页
        res.render(htmlIndex)
        // 填充用户列表
        $('#content').html(usersTpl());
        $('#users-list').on('click', '.remove', function () {
            $.ajax({
                url: '/api/users/',
                type: 'delete',
                data: {
                    id: $(this).data('id')
                },
                success() {
                    console.log('01');
                    // 初次渲染list
                    _loadData()
                    // 分页
                    _pagination(dataList)
                }
            })
        })

        // 初次渲染list
        _loadData()


        // 分页
        _pagination(dataList)


        // 点击保存，提交表单
        $('#users-save').on('click', _signup)
    }
}
export {
    signin,
    index
}