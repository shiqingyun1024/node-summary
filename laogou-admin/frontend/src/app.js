import './assets/common.css'
import router from './routes'

// router.go('/index')

// 第一个打开的页面
$.ajax({
    url:'/api/users/isAuth',
    dataType:'json',
    success(result){
        if(result.ret){
            console.log(result);
            router.go('/index')
        }else{
            router.go('/signin')
        }
    }
})