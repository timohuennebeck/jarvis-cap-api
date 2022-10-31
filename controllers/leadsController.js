const knex = require("knex")(require("../knexfile"));

// for all leads

const getLeads = (_req, res) => {
    knex("leads")
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Leads: ${err}`);
        });
};

const addNewLead = (req, res) => {
    knex("leads").then();
};

// for specific (id) lead

const getLeadId = (req, res) => {
    knex("leads").then();
};

const updateLead = (req, res) => {
    knex("leads").then();
};

const deleteLead = (req, res) => {
    knex("leads").then();
};

module.exports = { getLeads, getLeadId, addNewLead, updateLead, deleteLead };
