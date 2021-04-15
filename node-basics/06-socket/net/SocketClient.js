// const net = require('net');
// const client = net.createConnection({ port: 9000 }, () => {
//   // 'connect' listener.
//   console.log('connected to server!');
//   client.write('world!\r\n');
// });
// client.on('data', (data) => {
//   console.log(data.toString());
// //   client.end();
// });
// client.on('end', () => {
//   console.log('disconnected from server');
// });


// 聊天工具
const net = require('net')
const readline = require('readline')

var port = 9000
var host = '127.0.0.1'

var socket = new net.Socket()
socket.setEncoding = 'UTF-8'
socket.connect(port,host,()=>{
    socket.write('hello.')
})
socket.on('data',(msg)=>{
    console.log(msg.toString())
    say()
})
socket.on('error',(err)=>{
    console.log('error'+err)
})
socket.on('close',()=>{
    console.log('connection closed')
})
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function say(){
    rl.question('请输入：\n',inputMsg=>{
        if(inputMsg != 'bye'){
           // socket.write(inputMsg+'\n')
        }else{
            socket.destroy()
            rl.close()
        }
    })
}