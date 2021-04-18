import SMERouter from 'sme-router'
import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'
const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})
// $('#root').html(htmlIndex) 相当于下面的res.render

const router = new SMERouter('root')

router.route('/', (req, res, next) => {
  res.render(htmlSignin)
})

router.route('/signin', (req, res, next) => {
    res.render(htmlSignin)
  })

  export default router

// router.go('/user/123?name=hwen', { mes: 'hallo world'})