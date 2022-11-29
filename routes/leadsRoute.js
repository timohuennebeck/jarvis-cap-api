const express = require("express");
const router = express.Router();

const leadsController = require("../controllers/leadsController");

router
    .route("/")
    .get(leadsController.getLeads)
    .post(leadsController.addNewLead)

router
    .route("/:id")
    .get(leadsController.getLeadId)
    .put(leadsController.updateLead)
    .delete(leadsController.deleteLead);

module.exports = router;
