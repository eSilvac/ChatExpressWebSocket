const mongoose = require("mongoose");

const db = process.env.MONGO_URI || "mongodb://localhost:27017/chatSockets";
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}


const initDB = () => {
  mongoose.connect(db, options)
    .then(() => console.log("DB Connected!"))
    .catch(err => {
      console.log(`DB Connection Error: ${err.message}`);
  });
}

module.exports = initDB();
