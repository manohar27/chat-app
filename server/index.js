var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log("Connection created");
    socket.on('townSquare', (message) => {
        io.emit("townSquare", message);
    });
});




server.listen(5000);