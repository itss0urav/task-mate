const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { strict: true }
);
const User = mongoose.models.users || mongoose.model("users", userSchema);
module.exports = User;
