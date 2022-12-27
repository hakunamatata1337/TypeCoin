"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(3000);
console.log("Server listening on port 3000");
io.on("connection", (socket) => {
    console.log("Connected");
    //send a message to the client
    socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });
    //receive a message from the client
    socket.on("hello from client", (...args) => {
        console.log("Client said hello");
    });
});
