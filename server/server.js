var express = require('express');
var app = express();
var http = require('http').Server(app);
var socketIO = require('socket.io')(http);
app.get('/', function (_, res) {
    res.sendFile('public/index.html', {
        root: './'
    });
});
app.use(express.static('public'));
socketIO.on('connection', function (client) {
    console.log('a user connected');
    client.on('rollDice', function (diceNumber) {
        console.log("The dice roll was " + diceNumber);
        client.emit('rollDiced', diceNumber);
    });
});
socketIO.listen(8000, function () {
    console.log('listening on *:8000');
});
http.listen(3000, function () {
    console.log('listening on *:3000');
});
