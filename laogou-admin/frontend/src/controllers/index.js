import indexTpl from '../views/index.art'
import{auth as authModel} from '../models/auth'
import pageHeader from '../components/pageheader'
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

            // 加载页面导航
            pageHeader()

            const $lis = $('#sidebar-menu li:not(:first-child) a')
            // $lis.on('click',()=>{
            //     const url = $(this).attr('to')
            //     router.go(url)
            // })
            let hash = location.hash.slice(1)
            $lis.filter(`[href="${hash}"]`).parent().addClass('active').siblings().removeClass('active')
            // res.render()
        } else {
            router.go('/signin')
        }
    }
}
export default index