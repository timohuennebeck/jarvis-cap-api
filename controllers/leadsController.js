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
                message: `Error creating User: ${req.body.name}! ${err}`,
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
    knex("leads")
        .where({ id: req.params.id })
        .update(req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error updating User: ${req.params.id}! ${err}`,
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
            message: `Error deleting User: ${req.params.id}! ${err}`;
        });
};

module.exports = { getLeads, getLeadId, addNewLead, updateLead, deleteLead };
