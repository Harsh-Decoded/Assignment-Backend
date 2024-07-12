const express = require("express");
const router = express.Router();
const { getUsers, addUser } = require("../controllers/userController");

router.route("/users").get(getUsers); // Retrieve all users
router.route("/signup").post(addUser); // Add user to in-memory database

module.exports = router;
