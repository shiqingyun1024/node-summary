import indexTpl from '../views/index.art'
// 初始化数据
const index = router => {
    return async (req, res, next) => {
        let result = await authModel();
        if (result.ret) {
            // 渲染首页
            res.render(indexTpl({}))
        } else {
            router.go('/signin')
        }
    }
}
export default index