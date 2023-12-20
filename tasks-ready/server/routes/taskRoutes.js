const express = require("express");
const router = express.Router();
const { getTask, postTask } = require("../controller/taskController");
router.get("/api/gettask", getTask);
router.post("/api/posttask", postTask);
module.exports = router;
