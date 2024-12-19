const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    // When a new client connects
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        
        // Broadcast the message to all connected clients
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Send a welcome message to the new client
    ws.send('Welcome to the chat!');
});
