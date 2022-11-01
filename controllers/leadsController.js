const knex = require("knex")(require("../knexfile"));

// for all leads

const getLeads = (_req, res) => {
    knex("leads")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Leads: ${err}`);
        });
};

const addNewLead = (req, res) => {
    knex("leads")
        .insert(req.body)
        .then((resp) => {
            res.send(`Lead ${resp} has been created.`);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error creating Lead: ${req.body.name}! ${err}`,
            });
        });
};

// for specific (id) lead

const getLeadId = (req, res) => {
    knex("leads")
        .where({ id: req.params.id })
        .then((lead) => {
            res.json(lead);
        })
        .catch((err) => {
            res.status(400).send({
                message: `Error retrieving Lead: ${req.params.id}! ${err}`,
            });
        });
};

const updateLead = (req, res) => {
    const { created_at, ...body } = req.body;

    knex("leads")
        .where({ id: req.params.id })
        .update(body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                message: `Error updating Lead: ${req.params.id}! ${err}`,
            });
        });
};

const deleteLead = (req, res) => {
    knex("leads")
        .where({ id: req.params.id })
        .del()
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error deleting Lead: ${req.params.id}! ${err}`,
            });
        });
};

module.exports = { getLeads, addNewLead, getLeadId, updateLead, deleteLead };
