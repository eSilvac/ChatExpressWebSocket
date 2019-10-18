// Initial Config
require('dotenv').config()

const http = require("http");
const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Database
require("./models/config");

// Websocket
const server = http.createServer(app);
const io = socketIO(server);
require("./websocket/config")(io);

// Routes

// Middleware

app.use(bodyParser.json());
app.use(express.static('public'));

// Handle Errors 404
app.use((req, res, next) => {
  res.status(404).send('No route find');
});

// Handle Errors 500
app.use((err, req, res, next) => {
  console.log(err.stack);

  res.sendFile(path.join(__dirname, '../public/500.html'));
});

server.listen(PORT);
