const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port: 8080
});

wss.on('connection', function connection(ws) {
    ws.on('open', function open() {
        console.log('connected');
        ws.send(Date.now());
    });

    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});

wss.on('close', function close() {
    console.log('disconnected');
});