exports.up = function (knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id").primary();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("desired_position");
            table.string("email").notNullable();
            table.string("street_name").notNullable();
            table.string("postcode").notNullable();
            table
                .string("google_url")
                .defaultTo(
                    "https://docs.google.com/document/d/1pg3id6wxlmV65hVNb3uzYMbYVaPki1c8593KcpNIKcw/edit?usp=sharing"
                );
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("leads", (table) => {
            table.increments("id").primary();
            table.integer("users_id").unsigned().notNullable().references("id").inTable("users");
            table.string("his_or_her");
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("position");
            table.string("email");
            table.string("phone");
            table.string("image_url");
            table.string("linked_in");
            table.string("business_name").notNullable();
            table.string("street_name");
            table.string("postcode");
            table.string("icebreaker");
            table.string("paragraph_one");
            table.string("paragraph_two");
            table.string("paragraph_three");
            table.string("call_to_action");
            table.string("status").defaultTo("In Progress");
            table.timestamp("created_at").defaultTo(knex.fn.now());
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users").dropTable("leads");
};
