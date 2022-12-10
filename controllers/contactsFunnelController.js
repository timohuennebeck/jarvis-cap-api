const knex = require("knex")(require("../knexfile"));

// route "/"

const getContactsFunnel = (_req, res) => {
    knex("contactsFunnel")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Contacts Funnel: ${err}`);
        });
};

const addNewContactFunnel = (req, res) => {
    knex("contactsFunnel")
        .insert(req.body)
        .then((resp) => {
            res.send(`Contact ${resp} has been created.`);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error creating Contacts Funnel: ${req.body.name}! ${err}`,
            });
        });
};

// // route "/:id"

const getContactFunnelId = (req, res) => {
    knex("contactsFunnel")
        .where({ id: req.params.id })
        .then((contacts) => {
            res.json(contacts);
        })
        .catch((err) => {
            res.status(400).send({
                message: `Error retrieving Contacts Funnel: ${req.params.id}! ${err}`,
            });
        });
};

const updateContactFunnel = (req, res) => {
    const { created_at, ...body } = req.body;

    knex("contactsFunnel")
        .where({ id: req.params.id })
        .update({ ...body, updated_at: knex.fn.now() })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error updating Contacts Funnel: ${req.params.id}! ${err}`,
            });
        });
};

const deleteContactFunnel = (req, res) => {
    knex("contactsFunnel")
        .where({ id: req.params.id })
        .del()
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error deleting Contacts Funnel: ${req.params.id}! ${err}`,
            });
        });
};

module.exports = {
    getContactsFunnel,
    addNewContactFunnel,
    getContactFunnelId,
    updateContactFunnel,
    deleteContactFunnel,
};
