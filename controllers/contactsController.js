const knex = require("knex")(require("../knexfile"));

// route "/"

const getContacts = (_req, res) => {
    knex("contacts")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Contacts: ${err}`);
        });
};

const addNewContact = (req, res) => {
    knex("contacts")
        .insert(req.body)
        .then((resp) => {
            res.send(`Contact ${resp} has been created.`);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error creating Contact: ${req.body.name}! ${err}`,
            });
        });
};

// // route "/:id"

const getContactId = (req, res) => {
    knex("contacts")
        .where({ id: req.params.id })
        .then((contacts) => {
            res.json(contacts);
        })
        .catch((err) => {
            res.status(400).send({
                message: `Error retrieving Contact: ${req.params.id}! ${err}`,
            });
        });
};

const updateContact = (req, res) => {
    const { created_at, ...body } = req.body;

    knex("contacts")
        .where({ id: req.params.id })
        .update({ ...body, updated_at: knex.fn.now() })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error updating Contact: ${req.params.id}! ${err}`,
            });
        });
};

const deleteContact = (req, res) => {
    knex("contacts")
        .where({ id: req.params.id })
        .del()
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error deleting Contact: ${req.params.id}! ${err}`,
            });
        });
};

const getThisMonthContacts = (req, res) => {
    knex("contacts")
        .where("created_at", ">=", knex.raw("CURDATE() - INTERVAL 30 DAY"))
        .select("*")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Companies: ${err}`);
        });
};

const getLastMonthContacts = (req, res) => {
    knex("contacts")
        .where("created_at", "<=", knex.raw("DATE_SUB(CURDATE(), INTERVAL 30 DAY)"))
        .select("*")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Companies: ${err}`);
        });
};

module.exports = {
    getContacts,
    addNewContact,
    getContactId,
    updateContact,
    deleteContact,
    getThisMonthContacts,
    getLastMonthContacts,
};
