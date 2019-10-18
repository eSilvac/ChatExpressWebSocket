const Message = require('../models/schemas');

const connectWebSocket = (io) => {
  io.on("connection", async (socket) => {
    console.log("User connected to WebSocket")

    const message = await Message.find();
    message.forEach(element => {
      socket.emit("chat", element);       
    });

    socket.on("chat", async (msg) => {
      let msgData = { createdAt: new Date().toISOString(), body: msg }
      
      const message = await Message.create(msgData)
      io.emit("chat", message);
    });
  });

}

module.exports = connectWebSocket;
