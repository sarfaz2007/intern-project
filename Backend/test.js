const mongoose = require("mongoose");

const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = DBconnection;