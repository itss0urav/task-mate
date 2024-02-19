const express = require("express");
const router = express.Router();
const { getUser, postUser, getUsers } = require("../controller/userController");

router.post("/api/userlogin", getUser);
router.get("/api/users/get", getUsers);
router.post("/api/usersignup", postUser);

module.exports = router;
