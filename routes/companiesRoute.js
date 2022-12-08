const express = require("express");
const router = express.Router();

const companiesController = require("../controllers/companiesController");

router
    .route("/this-month")
    .get(companiesController.getThisMonthCompanies)

router
    .route("/last-month")
    .get(companiesController.getLastMonthCompanies)

router
    .route("/")
    .get(companiesController.getCompanies)
    .post(companiesController.addNewCompany)

router
    .route("/:id")
    .get(companiesController.getCompanyId)
    .put(companiesController.updateCompany)
    .delete(companiesController.deleteCompany);

module.exports = router;
