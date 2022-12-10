const express = require("express");
const router = express.Router();

const contactsFunnelController = require("../controllers/contactsFunnelController");

router
    .route("/")
    .get(contactsFunnelController.getContactsFunnel)
    .post(contactsFunnelController.addNewContactFunnel);

router
    .route("/:id")
    .get(contactsFunnelController.getContactFunnelId)
    .put(contactsFunnelController.updateContactFunnel)
    .delete(contactsFunnelController.deleteContactFunnel);

module.exports = router;
