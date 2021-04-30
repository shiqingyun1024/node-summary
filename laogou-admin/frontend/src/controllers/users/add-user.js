import usersAddTpl from '../../views/users-add.art'
import page from '../../databus/page'
// 提交新增用户  添加用户
const _signup = () => {
    // 提交表单
    const data = $('#users-form').serialize()
    $.ajax({
        url: '/api/users/',
        type: 'post',
        headers:{
          'X-Access-Token':localStorage.getItem('lg-token') || ""
        },
        data,
        success(res) {
            // 添加数据后渲染
            page.setCurPage(1)
            
            // 告知list页面要重新渲染
            $('body').trigger('addUser')
        }
    })
    // 关闭模态框
    $('#users-close').click();
}