const mongoose = require("mongoose");

const connectDB = mongoose
  .connect("mongodb://127.0.0.1:27017/practice")
  .then(console.log("MongoDB Connected"));

module.exports = connectDB;
