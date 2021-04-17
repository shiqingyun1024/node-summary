const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('hello')
});

io.on('connection', (socket) => {
//   console.log('a user connected');
  socket.on('receive',data=>{
      console.log(data);
      socket.broadcast.emit('message',data)
  })
});

server.listen(3000, '192.168.31.135',() => {
  console.log('listening on *:3000');
});