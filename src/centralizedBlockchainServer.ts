import { Server } from "socket.io";

const io = new Server(3000);

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
