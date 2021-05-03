import indexTpl from '../../views/index.art'
import usersTpl from '../../views/users.art'
import usersListTpl from '../../views/users-list.art'

import pagination from '../../components/pagination'
import page from '../../databus/page'

import { addUser } from './add-user'
import { usersList as usersListModel} from '../../models/users-list'
import { auth as authModel} from '../../models/auth'


import router from '../../routes'
const htmlIndex = indexTpl({})
const pageSize = page.pageSize;
let curPage = 1;
let dataList = [];

// 请求数据
const _loadData = async () => {
    let result = await usersListModel()
    dataList = result.data;
    // 分页
    pagination(result.data, pageSize, curPage)
    _list(curPage);
}

// 获取列表数据并渲染
const _list = (pageNo) => {
    let start = (pageNo - 1) * pageSize
    $("#users-list").html(usersListTpl({
        data: dataList.slice(start, start + pageSize)
    }))
}

// 所有的事件方法
const _methods = () => {
    // 删除事件绑定
    $('#users-list').on('click', '.remove', function () {
        $.ajax({
            url: '/api/users/',
            type: 'delete',
            headers: {
                'X-Access-Token': localStorage.getItem('lg-token') || ""
            },
            data: {
                id: $(this).data('id')
            },
            success() {
                _loadData()
                const isLastPage = Math.ceil(dataList.length / pageSize) === page.setCurPage
                const restOne = dataList.length % pageSize === 1
                const notPageFirst = page.setCurPage > 0
                // 初次渲染list
                if (isLastPage && restOne && notPageFirst) {
                    page.setCurPage(page.curPage - 1)
                }
                // 分页
                pagination(dataList, pageSize)
            }
        })
    })
}

// 发布订阅模式===注册
const _subscribe = () => {
    $('body').on('changeCurPage', (e, index) => {
        _list(index)
    })
    $('body').on('addUser', (e, index) => {
        _loadData()
    })
}


// 初始化数据
const index = router => {
    const loadIndex = (res) => {
        // 渲染首页
        res.render(htmlIndex)
        // 填充用户列表
        $('#content').html(usersTpl());
        $('#add-user-btn').on('click', addUser)
        // 初次渲染list
        _loadData()

        // 页面事件绑定
        _methods();
        // 退出登录
        $("#users-signout").on('click', (e) => {
            console.log('退出登录');
            e.preventDefault();
            localStorage.setItem('lg-token', '')
            location.reload()
            // $.ajax({
            //     url: '/api/users/signout',
            //     headers:{
            //         'X-Access-Token':localStorage.getItem('lg-token') || ""
            //       },
            //     success(result) {
            //         if (result.ret) {
            //             location.reload()
            //         }
            //     }

            // })

        })

        // 分页
        pagination(dataList, pageSize, curPage)
        _subscribe()
    }
    return async (req, res, next) => {
        let result = await authModel();
        if (result.ret) {
            loadIndex(res)
        } else {
            router.go('/signin')
        }
    }
}
export default index