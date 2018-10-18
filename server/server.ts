const express = require('express');
const app = express();
const http = require('http').Server(app);
const socketIO = require('socket.io')(http);

app.get('/', function(_: any, res: any) {
  res.sendFile('public/index.html', {
    root: './',
  });
});

app.use(express.static('public'));

socketIO.on('connection', (client: SocketIOClient.Socket) => {
  console.log('a user connected');

  client.on('rollDice', (diceNumber: number) => {
    console.log(`The dice roll was ${diceNumber}`);
    client.emit('rollDiced', diceNumber);
  });
});

socketIO.listen(8000, function() {
  console.log('listening on *:8000');
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
