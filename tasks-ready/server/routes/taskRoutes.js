const express = require("express");
const router = express.Router();
const {
  getTask,
  postTask,
  updateTask,
  deleteTask,
  updateTaskFields,
} = require("../controller/taskController");

router.get("/api/gettask", getTask);
router.post("/api/posttask", postTask);
router.put("/api/updatetask/:id", updateTask);
router.put("/api/updatetaskfields/:id", updateTaskFields);
router.delete("/api/deletetask/:id", deleteTask);

module.exports = router;
