const usersData = require("../seed_data/users");
const contactsData = require("../seed_data/contacts");
const contactsFunnelData = require("../seed_data/contactsFunnel");
const companiesData = require("../seed_data/companies");
const companiesFunnelData = require("../seed_data/companiesFunnel");
const faqsData = require("../seed_data/faqs");

exports.seed = function (knex) {
    return knex("users")
        .del()
        .then(function () {
            return knex("users").insert(usersData);
        })
        .then(() => {
            return knex("contactsFunnel").del();
        })
        .then(() => {
            return knex("contactsFunnel").insert(contactsFunnelData);
        })
        .then(() => {
            return knex("contacts").del();
        })
        .then(() => {
            return knex("contacts").insert(contactsData);
        })
        .then(() => {
            return knex("companies").del();
        })
        .then(() => {
            return knex("companies").insert(companiesData);
        })
        .then(() => {
            return knex("companiesFunnel").del();
        })
        .then(() => {
            return knex("companiesFunnel").insert(companiesFunnelData);
        })
        .then(() => {
            return knex("faqs").del();
        })
        .then(() => {
            return knex("faqs").insert(faqsData);
        });
};
