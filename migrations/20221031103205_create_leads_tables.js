exports.up = function (knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id").primary();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("desired_position");
            table.string("email").notNullable();
            table.string("street_name");
            table.string("postcode");
            table
                .string("google_url")
                .defaultTo(
                    "https://docs.google.com/document/d/1pg3id6wxlmV65hVNb3uzYMbYVaPki1c8593KcpNIKcw/edit?usp=sharing"
                );
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("leads", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
                .defaultTo(1);
            table.string("his_or_her");
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("position");
            table.string("email");
            table.string("phone");
            table.string("image_url").defaultTo("https://i.imgur.com/IryY30I.jpg");
            table.string("linked_in");
            table.string("business_name").notNullable();
            table.string("street_name");
            table.string("postcode");
            table.text("icebreaker");
            table.text("paragraph_one");
            table.text("paragraph_two");
            table.text("paragraph_three");
            table.text("call_to_action");
            table.string("status");
            table.timestamp("created_at").defaultTo(knex.fn.now());
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("leads").dropTable("users");
};
