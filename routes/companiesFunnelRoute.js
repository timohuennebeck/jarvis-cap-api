const express = require("express");
const router = express.Router();

const companiesFunnelController = require("../controllers/companiesFunnelController");

router
    .route("/")
    .get(companiesFunnelController.getCompaniesFunnel)
    .post(companiesFunnelController.addNewCompanyFunnel);

router
    .route("/:id")
    .get(companiesFunnelController.getCompanyFunnelId)
    .put(companiesFunnelController.updateCompanyFunnel)
    .delete(companiesFunnelController.deleteCompanyFunnel);

module.exports = router;
