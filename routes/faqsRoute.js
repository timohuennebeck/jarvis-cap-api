const express = require("express");
const router = express.Router();

const faqsController = require("../controllers/faqsController");

router
    .route("/")
    .get(faqsController.getFaqs)

module.exports = router;
