const knex = require("knex")(require("../knexfile"));

// for all users

const getUsers = (_req, res) => {
    knex("users")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Users: ${err}`);
        });
};

const addNewUser = (req, res) => {
    console.log(req.body);
    knex("users")
        .insert(req.body)
        .then((resp) => {
            res.send(`User ${resp} has been created`);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error creating user ${req.body.name}: ${err}`,
            });
        });
};

// for specific (id) user

const getUserId = (req, res) => {
    knex("users")
        .where({ id: req.params.id })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(400).send({
                message: `Error retrieving User ID: ${req.params.id}: ${err}`,
            });
        });
};

const deleteUserId = (req, res) => {
    knex("users")
        .where({ id: req.params.id })
        .del()
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error deleting user ${req.params.id}: ${err}`,
            });
        });
};

module.exports = { getUsers, addNewUser, getUserId, deleteUserId };
