"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const socket = (0, socket_io_client_1.io)("ws://localhost:3000");
// send a message to the server
socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });
// receive a message from the server
socket.on("hello from server", (...args) => {
    console.log("Server said hello");
});
