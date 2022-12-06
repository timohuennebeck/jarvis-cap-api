const usersData = require("../seed_data/users");
const leadsData = require("../seed_data/leads");
const companiesData = require("../seed_data/companies");
const faqsData = require("../seed_data/faqs");

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
        })
        .then(() => {
            return knex("companies").del();
        })
        .then(() => {
            return knex("companies").insert(companiesData);
        })
        .then(() => {
            return knex("faqs").del();
        })
        .then(() => {
            return knex("faqs").insert(faqsData);
        });
};
