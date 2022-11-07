const express = require("express");
const router = express.Router();

const leadsController = require("../controllers/leadsController");

router
    .route("/")
    .get(leadsController.getLeads)
    .post(leadsController.addNewLead)

router
    .route("/in-progress")
    .get(leadsController.getLeadsInProgress)

router
    .route("/cl-approved")
    .get(leadsController.getLeadsClApproved)

router
    .route("/cl-declined")
    .get(leadsController.getLeadsClDeclined)

router
    .route("/awaiting-response")
    .get(leadsController.getLeadsAwaitingResponse)

router
    .route("/interview-scheduled")
    .get(leadsController.getLeadsInterviewScheduled)

router
    .route("/accepted")
    .get(leadsController.getLeadsAccepted)

router
    .route("/rejected")
    .get(leadsController.getLeadsRejected)

router
    .route("/:id")
    .get(leadsController.getLeadId)
    .put(leadsController.updateLead)
    .delete(leadsController.deleteLead);

module.exports = router;
