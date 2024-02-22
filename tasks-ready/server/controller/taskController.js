const Task = require("../models/taskModel");

const postTask = async (req, res) => {
  try {
    const { name, type, assignor, assignees, status } = req.body;
    console.log("Received data for creating task:", req.body);
    await Task.create({ name, type, assignor, assignees, status });
    console.log("Task created successfully");
    res.json({ passed: true });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ passed: false, error: "Internal Server Error" });
  }
};

const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log("Tasks fetched:", tasks);
    res.status(200).json({ passed: true, tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ passed: false, error: "Internal Server Error" });
  }
};

const updateTaskFields = async (req, res) => {
  try {
    const { name, type } = req.body;
    console.log("Received data for updating task fields:", req.body);
    const task = await Task.findByIdAndUpdate(req.params.id, {
      name,
      type,
    });
    console.log("Updated task:", task);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ passed: true });
  } catch (error) {
    console.error("Error updating task fields:", error);
    res.status(500).json({ passed: false, error: "Internal Server Error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { status } = req.body;
    console.log("Received data for updating task status:", req.body);
    await Task.findByIdAndUpdate(req.params.id, { status });
    res.json({ passed: true });
  } catch (error) {
    console.error("Error updating task status:", error);
    res.status(500).json({ passed: false, error: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    console.log("Task deleted:", task);
    res.status(200).json({ passed: true });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ passed: false, error: "Internal Server Error" });
  }
};

module.exports = {
  postTask,
  getTask,
  updateTask,
  deleteTask,
  updateTaskFields,
};
