var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var config = require('./config');

//Allow connections only from deployed domain
io.origins(config.origin);

//Simple chat server
io.on('connection', function(socket) {
  console.log('Connection created');
  socket.on('townSquare', message => {
    io.emit('townSquare', message);
  });
});

server.listen(config.port);
app.use(express.static('../build'));
