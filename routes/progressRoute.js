const express = require("express");
const router = express.Router();

const progressController = require("../controllers/progressController");

router
    .route("/")
    .get(progressController.getLeadsProgress);

module.exports = router;
