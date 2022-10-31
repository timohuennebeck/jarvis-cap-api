const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router
    .route("/")
    .get(usersController.getUsers)
    .post(usersController.addNewUser);

router
    .route("/:id")
    .get(usersController.getUserId);

module.exports = router;
