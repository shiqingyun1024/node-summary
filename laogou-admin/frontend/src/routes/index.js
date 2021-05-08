import SMERouter from 'sme-router'
import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'
import signin from '../controllers/signin'
import index from '../controllers/users/list-user'

import{auth as authModel} from '../models/auth'
const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})
// $('#root').html(htmlIndex) 相当于下面的res.render

const router = new SMERouter('root')

router.route('/signin', signin(router))

router.route('/index', index(router))

// 路由守卫
router.use(async (req)=>{
  // 第一个打开的页面
  let result = await authModel()
  if(result.ret){
    router.go('/index')
  }else{
    router.go('/signin')
  }
})

router.route('/', () => {})

export default router

// router.go('/user/123?name=hwen', { mes: 'hallo world'})