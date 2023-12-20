const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const postUser = async (req, res) => {
  const { username, email, password } = await req.body;
  const hashPass = await bcrypt.hash(password, 10);
  const Users = await User.create({ username, email, password: hashPass });
  console.log(Users);
  res.json({ passed: true });
};
const getUser = async (req, res) => {
  const { username, password } = await req.body;
  const Users = await User.findOne({ username });
  console.log(Users);
  const Match = await bcrypt.compare(password, Users.password);
  if (Match) {
    res.status(201).json({ passed: true });
  } else {
    res.status(400).json({ passed: false });
  }
};

module.exports = { postUser, getUser };
