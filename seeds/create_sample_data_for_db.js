const usersData = require("../seed_data/users");
const leadsData = require("../seed_data/leads");

exports.seed = function (knex) {
    return knex("users")
        .del()
        .then(function () {
            return knex("users").insert(usersData);
        })
        .then(() => {
            return knex("leads").del();
        })
        .then(() => {
            return knex("leads").insert(leadsData);
        });
};
