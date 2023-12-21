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

const updateTask = async (req, res) => {
  // try {
  //   let task = await Task.findById(req.params.id);
  //   task = req.body.status;
  //   await Task.findByIdAndUpdate(req.params.id, task);
  //   console.log(task);
  //   if (!task) {
  //     return res.status(404).json({ error: "Task not found" });
  //   }
  //   // Add your update logic here
  //   res.json({ passed: true });
  // } catch (error) {
  //   console.error("Error updating tasks:", error);
  //   res.status(500).json({ passed: false, error: "Internal Server Error" });
  // }

  // New code below

  try {
    let id = req.params.id;
    const { status } = req.body;
    await Task.findByIdAndUpdate(id, { status: status });
    // res.status(200).
  } catch (error) {
    console.error(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ passed: true });
  } catch (error) {
    console.error("Error delete tasks:", error);
    res.status(500).json({ passed: false, error: "Internal Server Error" });
  }
};

module.exports = { postTask, getTask, updateTask, deleteTask };
