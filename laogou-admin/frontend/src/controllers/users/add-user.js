import usersAddTpl from '../../views/users-add.art'
import page from '../../databus/page'
import { users as usersAddModel} from '../../models/users-add'
// 提交新增用户  添加用户
// export const addUser = () => {
    const html = usersAddTpl()
    $('#users-list-box').after(html)
    const _save = async()=>{
       // 提交表单
       const data = $('#users-form').serialize()
       let result = await usersAddModel(data)
       if(result.ret){
           // 添加数据后渲染 
           page.setCurPage(1)
           // 告知list页面要重新渲染   
           $('body').trigger('adduser')
       }
       //  单击关闭模态框
       const $btnClose = $('#users-close')
       $btnClose.click()
    }

    // 点击保存，提交表单,保存模态框
    $('#users-save').on('click', _save)

// }