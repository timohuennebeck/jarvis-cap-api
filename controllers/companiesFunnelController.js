const knex = require("knex")(require("../knexfile"));

// route "/"

const getCompaniesFunnel = (_req, res) => {
    knex("companiesFunnel")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Companies Funnel: ${err}`);
        });
};

const addNewCompanyFunnel = (req, res) => {
    knex("companiesFunnel")
        .insert(req.body)
        .then((resp) => {
            res.send(`Contact ${resp} has been created.`);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error creating Companies Funnel: ${req.body.name}! ${err}`,
            });
        });
};

// // route "/:id"

const getCompanyFunnelId = (req, res) => {
    knex("companiesFunnel")
        .where({ id: req.params.id })
        .then((contacts) => {
            res.json(contacts);
        })
        .catch((err) => {
            res.status(400).send({
                message: `Error retrieving Companies Funnel: ${req.params.id}! ${err}`,
            });
        });
};

const updateCompanyFunnel = (req, res) => {
    const { created_at, ...body } = req.body;

    knex("companiesFunnel")
        .where({ id: req.params.id })
        .update({ ...body, updated_at: knex.fn.now() })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error updating Companies Funnel: ${req.params.id}! ${err}`,
            });
        });
};

const deleteCompanyFunnel = (req, res) => {
    knex("companiesFunnel")
        .where({ id: req.params.id })
        .del()
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error deleting Companies Funnel: ${req.params.id}! ${err}`,
            });
        });
};

module.exports = {
    getCompaniesFunnel,
    addNewCompanyFunnel,
    getCompanyFunnelId,
    updateCompanyFunnel,
    deleteCompanyFunnel,
};
