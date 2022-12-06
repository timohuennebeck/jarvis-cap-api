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
    knex("users")
        .insert(req.body)
        .then((resp) => {
            res.send(`User ${resp} has been created.`);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                message: `Error creating User: ${req.body.name}! ${err}`,
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
                message: `Error retrieving User: ${req.params.id}! ${err}`,
            });
        });
};

const updateUser = (req, res) => {
    const { created_at, updated_at, ...body } = req.body;

    knex("users")
        .where({ id: req.body.id })
        .update(body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error updating User: ${req.params.id}! ${err}`,
            });
        });
};

const deleteUser = (req, res) => {
    knex("users")
        .where({ id: req.params.id })
        .del()
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error deleting User: ${req.params.id}! ${err}`,
            });
        });
};

module.exports = { getUsers, addNewUser, getUserId, updateUser, deleteUser };
