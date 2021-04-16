const ws = new WebSocket('ws://localhost:9527/')

ws.onopen = () =>{
    ws.send('大家好！')
}
ws.onmessage = msg =>{
    const content = document.getElementById('content')
    content.innerHTML += msg.data + '<br/>'
}
// 上面也可以这样来写
ws.on('message',msg=>{
    const content = document.getElementById('content')
    content.innerHTML += msg.data + '<br/>'
})

ws.onerror = (err)=>{
    console.log(err)
}

ws.onclose = (err)=>{
    console.log('closed~')
}