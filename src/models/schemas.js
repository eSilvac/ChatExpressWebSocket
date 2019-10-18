const mongoose = require('mongoose')
const Schema = mongoose.Schema

let messageSchema = new mongoose.Schema({
  body: {
    type: String,
    required: [true, "is required"],
  },
  createdAt: {
    type: String,
  }
});

module.exports = mongoose.model("Message", messageSchema)
