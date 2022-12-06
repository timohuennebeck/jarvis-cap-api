const knex = require("knex")(require("../knexfile"));

// route "/"

const getCompanies = (_req, res) => {
    knex("companies")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Companies: ${err}`);
        });
};

const addNewCompany = (req, res) => {
    knex("companies")
        .insert(req.body)
        .then((resp) => {
            res.send(`Company ${resp} has been created.`);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                message: `Error creating Company: ${req.body.name}! ${err}`,
            });
        });
};

// // route "/:id"

const getCompanyId = (req, res) => {
    knex("companies")
        .where({ id: req.params.id })
        .then((resp) => {
            res.json(resp);
        })
        .catch((err) => {
            res.status(400).send({
                message: `Error retrieving Company: ${req.params.id}! ${err}`,
            });
        });
};

const updateCompany = (req, res) => {
    const { created_at, ...body } = req.body;

    knex("companies")
        .where({ id: req.params.id })
        .update({ ...body, updated_at: knex.fn.now() })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error updating Company: ${req.params.id}! ${err}`,
            });
        });
};

const deleteCompany = (req, res) => {
    knex("companies")
        .where({ id: req.params.id })
        .del()
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error deleting Company: ${req.params.id}! ${err}`,
            });
        });
};

module.exports = {
    getCompanies,
    addNewCompany,
    getCompanyId,
    updateCompany,
    deleteCompany,
};
