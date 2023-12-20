const Task = require("../models/taskModel");

const postTask = async (req, res) => {
  const { name, type, assignee, status } = await req.body;
  await Task.create({ name, type, assignee, status });
  console.log(Task);
  res.json({ passed: true });
};
const getTask = async (req, res) => {
  const Tasks = await Task.find();
  res.status(201).send(Tasks).json({ passed: true });
  res.status(400).json({ passed: false });
};

module.exports = { postTask, getTask };
