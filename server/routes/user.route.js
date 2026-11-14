const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controllers");

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUserById);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);

module.exports = router;

// http://localhost:5000/api/users/
// http://localhost:5000/api/users
// http://localhost:5000/api/users/:id