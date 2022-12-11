const knex = require("knex")(require("../knexfile"));

// route "/"

const getToDos = (_req, res) => {
    knex("todos")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving To Dos: ${err}`);
        });
};

const addNewToDo = (req, res) => {
    knex("todos")
        .insert(req.body)
        .then((resp) => {
            res.send(`To Do ${resp} has been created.`);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error creating To Do: ${req.body.name}! ${err}`,
            });
        });
};

// // route "/:id"

const getToDoId = (req, res) => {
    knex("todos")
        .where({ id: req.params.id })
        .then((contacts) => {
            res.json(contacts);
        })
        .catch((err) => {
            res.status(400).send({
                message: `Error retrieving To Do: ${req.params.id}! ${err}`,
            });
        });
};

const updateToDo = (req, res) => {
    const { created_at, ...body } = req.body;

    knex("todos")
        .where({ id: req.params.id })
        .update({ ...body, updated_at: knex.fn.now() })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error updating To Do: ${req.params.id}! ${err}`,
            });
        });
};

const deleteToDo = (req, res) => {
    knex("todos")
        .where({ id: req.params.id })
        .del()
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                message: `Error deleting To Do: ${req.params.id}! ${err}`,
            });
        });
};

module.exports = {
    getToDos,
    addNewToDo,
    getToDoId,
    updateToDo,
    deleteToDo,
};
