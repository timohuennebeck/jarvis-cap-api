const knex = require("knex")(require("../knexfile"));

const getUsers = (_req, res) => {
    knex("users")
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Users: ${err}`);
        });
};

const getUserId = (req, res) => {
    res.send()
}


module.exports = { getUsers, getUserId }
