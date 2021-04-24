import SMERouter from 'sme-router'
import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'
import { signin,index } from '../controllers'
const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})
// $('#root').html(htmlIndex) 相当于下面的res.render

const router = new SMERouter('root')

router.route('/signin', signin(router))

router.route('/index', index(router))

// router.route('/signin', signin(router))

  export default router

// router.go('/user/123?name=hwen', { mes: 'hallo world'})