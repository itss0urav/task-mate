const express = require("express");
const router = express.Router();
const { getUser, postUser } = require("../controller/userController");

router.post("/api/userlogin", getUser);
router.post("/api/usersignup", postUser);

module.exports = router;
