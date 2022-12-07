const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contactsController");

router
    .route("/")
    .get(contactsController.getContacts)
    .post(contactsController.addNewContact)

router
    .route("/:id")
    .get(contactsController.getContactId)
    .put(contactsController.updateContact)
    .delete(contactsController.deleteContact);

module.exports = router;
