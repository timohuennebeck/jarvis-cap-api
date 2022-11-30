const knex = require("knex")(require("../knexfile"));

// for all questions

const getFaqs = (_req, res) => {
    knex("faqs")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving FAQ: ${err}`);
        });
};

module.exports = { getFaqs };
