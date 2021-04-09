$.ajax({
    url:'/api/list',
    success(result){
        console.log(result);
        let html = '<ul>'
        $.each(result.data,(index,value)=>{
            html+='<li>'+value+'</li>'
        })
        html +="</ul>"
        $('#list').html(html)
    }
})