const Task = require("../models/taskModel");

const postTask = async (req, res) => {
  const { name, type, assignee, status } = await req.body;
  await Task.create({ name, type, assignee, status });
  console.log(Task);
  res.json({ passed: true });
};
const getTask = async (req, res) => {
  try {
    const Tasks = await Task.find();
    res.status(200).json({ passed: true, tasks: Tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ passed: false, error: "Internal Server Error" });
  }
};


module.exports = { postTask, getTask };
