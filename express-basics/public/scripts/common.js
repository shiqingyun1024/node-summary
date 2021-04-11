$.ajax({
    url:'/api/list',
    success(result){
        console.log(result);
        let html = '<ul>'
        $.each(result.data,(index,value)=>{
            html+='<li>'+value+'</li>'
        })
        html +="</ul>"

        template.compile('<div>{{data}}</div>',{data:100})
        console.log(str());
        $('#list').html(html)
    }
})