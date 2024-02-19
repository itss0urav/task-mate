// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const {
  getTask,
  postTask,
  updateTask,
  deleteTask,
  updateTaskFields,
} = require("../controller/taskController");
// const verifyToken = require("../middleware/authMiddleware"); // Import the middleware correctly

router.get(
  "/api/gettask",
  // verifyToken,
  getTask
);
router.post(
  "/api/posttask",
  // verifyToken,
  postTask
);
router.put(
  "/api/updatetask/:id",
  // verifyToken,
  updateTask
);
router.put(
  "/api/updatetaskfields/:id",
  // verifyToken,
  updateTaskFields
);
router.delete(
  "/api/deletetask/:id",
  // verifyToken,
  deleteTask
);

module.exports = router;
