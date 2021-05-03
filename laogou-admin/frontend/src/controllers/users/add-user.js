import usersAddTpl from '../../views/users-add.art'
import page from '../../databus/page'
import { users as usersAddModel} from '../../models/users-add'
// 提交新增用户  添加用户
export const addUser = () => {
    const html = usersAddTpl()
    $('#users-list-box').after(html)
    // 提交表单
    const data = $('#users-form').serialize()
    const _save = () => {
        
        // 关闭模态框
        $('#users-close').click();
    }

    // 点击保存，提交表单,保存模态框
    $('#users-save').on('click', _save)

}