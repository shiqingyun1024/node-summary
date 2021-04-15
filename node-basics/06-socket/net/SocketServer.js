const net = require('net')

const server = net.createServer(socket=>{
    // socket.end('')
    socket.write('hello')  // socket.write 向前端写入数据
    
    socket.on('data',(chunk)=>{
        console.log(chunk.toString());
    })
})
server.on('error',(err)=>{
    throw err
})

server.listen('6527',()=>{
    console.log('opened server on',server.address());
})