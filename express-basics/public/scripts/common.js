$.ajax({
    url: '/api/list',
    success(result) {
        let templateStr = `
          <ul>
            {{each data}}
               <li>{{$value}}</li>
            {{/each}}
          </ul>
        `
        let html = template.render(templateStr, {data:JSON.parse(result).data})
        $('#list').html(html)
    }
})