const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router
    .route("/")
    .get(usersController.getUsers)
    .post(usersController.addNewUser);

router
    .route("/:id")
    .get(usersController.getUserId)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router;
