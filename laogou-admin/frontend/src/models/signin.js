export const signin = (data) =>{
    return new promise((resolve,reject)=>{
        $.ajax({
            url: '/api/users/signin',
            type:'post',
            dataType:'json',
            data,
            success:function(res,textStatus,jqXHR) {
                resolve({
                    res,
                    jqXHR
                }) 
            }
        })
    })
}
