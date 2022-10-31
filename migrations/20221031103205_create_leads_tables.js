exports.up = function (knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id");
            table.string("first_name").notNullable();
            table.string("last_name");
            table.string("email").notNullable();
            table.string("google_url");
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("leads", (table) => {
            table.increments("id");
            table.integer("users_id").unsigned().references("id").inTable("users");
            table.string("first_name").notNullable();
            table.string("last_name");
            table.string("position");
            table.string("email");
            table.integer("phone");
            table.string("image_url");
            table.string("linked_in");
            table.string("business_name");
            table.string("street_name");
            table.integer("postcode");
            table.string("icebreaker");
            table.string("paragraph_one");
            table.string("paragraph_two");
            table.string("paragraph_three");
            table.string("call_to_action");
            table.string("status");
            table.timestamp("created_at").defaultTo(knex.fn.now());
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users").dropTable("leads");
};
