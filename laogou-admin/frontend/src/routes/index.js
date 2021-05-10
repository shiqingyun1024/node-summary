import SMERouter from 'sme-router'
import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'
import signin from '../controllers/signin'
// import index from '../controllers/users/list-user'
import index from '../controllers/index'
import listUser from '../controllers/users/list-user'
import listPosition from '../controllers/positions/list-position'

import{auth as authModel} from '../models/auth'
import listPosition from '../controllers/positions/list-position'
const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})
// $('#root').html(htmlIndex) 相当于下面的res.render

const router = new SMERouter('root')

router.route('/signin', signin(router))

router.route('/index', index(router))
router.route('/index/users', listUser(router))
router.route('/index/positions', listPosition(router))

router.route('*',(req,res,next)=>{
  res.redirect('/index/users')
})
// 路由守卫
router.use(async (req)=>{
  // 第一个打开的页面
  let result = await authModel()
  if(result.ret){
    router.go(req.url)
  }else{
    router.go('/signin')
  }
})

router.route('/', () => {})

export default router

// router.go('/user/123?name=hwen', { mes: 'hallo world'})