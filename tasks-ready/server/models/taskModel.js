const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    assignee: {
      type: [String],
    },
    status: Boolean,
  },
  { timestamps: true }
);
const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);
module.exports = Task;
