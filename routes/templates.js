const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.send()
    })
    .post((req, res) => {
        res.send();
    })

router
    .route("/:id")
    .get((req, res) => {
        res.send()
    })
    .put((req, res) => {
        res.send()
    })

module.exports = router;