const mongoose = require("mongoose");

// const URI = " mongodb://127.0.0.1:27017/mernpro2024";
// const URI = "mongodb+srv://manishdhawan0496:mkdhawan@cluster0.ltuj7qu.mongodb.net/mernpro2024?retryWrites=true&w=majority";
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
    process.exit(0);
  }
};

module.exports = connectDb;