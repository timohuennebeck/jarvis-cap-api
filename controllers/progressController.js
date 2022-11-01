const knex = require("knex")(require("../knexfile"));

const getLeadsProgress = (_req, res) => {
    knex("leads")
        .where({ status: "In Progress" })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Leads: ${err}`);
        });
};

module.exports = { getLeadsProgress };
