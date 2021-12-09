const express = require('express');
const socketio = require('socket.io');
const router = require('./router.js')
const http = require('http');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

server.listen(PORT,()=>{console.log(`server running on port ${PORT}`);})