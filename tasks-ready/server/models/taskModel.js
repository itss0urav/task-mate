const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  { name: String, type: String, assignee: String, status: Boolean },
  { strict: true }
);
const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);
module.exports = Task;
