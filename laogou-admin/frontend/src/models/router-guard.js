$.ajax({
    url:'/api/users/isAuth',
    dataType:'json',
    headers:{
        'x-Access-Token':localStorage.getItem('lg-token') || ''
    },
    success(result){
       return result
    }
})