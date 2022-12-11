const express = require("express");
const router = express.Router();

const toDosController = require("../controllers/toDosController");

router
    .route("/")
    .get(toDosController.getToDos)
    .post(toDosController.addNewToDo);

router
    .route("/:id")
    .get(toDosController.getToDoId)
    .put(toDosController.updateToDo)
    .delete(toDosController.deleteToDo);

module.exports = router;
