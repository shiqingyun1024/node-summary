import indexTpl from '../views/index.art'
import{auth as authModel} from '../models/auth'
// 初始化数据
const index = router => {
    return async (req, res, next) => {
        let result = await authModel();
        if (result.ret) {
            const html = indexTpl({
                subRouter:res.subRouter()
            })
            // 渲染首页
            next(html)
            $('#sidebar-menu li:not(:first-child)').on('click',()=>{
                const url = $(this).attr('to')
                router.go(url)
            })
            // res.render()
        } else {
            router.go('/signin')
        }
    }
}
export default index