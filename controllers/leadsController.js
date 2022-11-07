const knex = require("knex")(require("../knexfile"));

// route "/"

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
            console.log(err);
            res.status(400).json({
                message: `Error creating Lead: ${req.body.name}! ${err}`,
            });
        });
};

// // route "/:id"

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
        .update({ ...body, updated_at: knex.fn.now() })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
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

// status of leads

const getLeadsInProgress = (_req, res) => {
    knex("leads")
        .where({ status: "In Progress" })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Leads: ${err}`);
        });
};

const getLeadsClApproved = (_req, res) => {
    knex("leads")
        .where({ status: "CL Approved" })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Leads: ${err}`);
        });
};

const getLeadsClDeclined = (_req, res) => {
    knex("leads")
        .where({ status: "CL Declined" })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Leads: ${err}`);
        });
};

const getLeadsAwaitingResponse = (_req, res) => {
    knex("leads")
        .where({ status: "Awaiting Response" })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Leads: ${err}`);
        });
};

const getLeadsInterviewScheduled = (_req, res) => {
    knex("leads")
        .where({ status: "Interview Scheduled" })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Leads: ${err}`);
        });
};

const getLeadsAccepted = (_req, res) => {
    knex("leads")
        .where({ status: "Accepted" })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Leads: ${err}`);
        });
};

const getLeadsRejected = (_req, res) => {
    knex("leads")
        .where({ status: "Rejected" })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Leads: ${err}`);
        });
};

module.exports = {
    getLeads,
    addNewLead,
    getLeadId,
    updateLead,
    deleteLead,
    getLeadsInProgress,
    getLeadsClApproved,
    getLeadsClDeclined,
    getLeadsAwaitingResponse,
    getLeadsInterviewScheduled,
    getLeadsAccepted,
    getLeadsRejected,
};
