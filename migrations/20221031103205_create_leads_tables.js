exports.up = function (knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id").primary();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("nickname");
            table.string("password");
            table.string("desired_position");
            table.string("email").notNullable();
            table.string("image_url");
            table.string("street_name");
            table.string("city");
            table.string("postcode");
            table.string("state");
            table.string("country");
            table.string("target_title");
            table.string("target_date");
            table.string("target_income");
            table
                .string("google_url")
                .defaultTo(
                    "https://docs.google.com/document/d/1pg3id6wxlmV65hVNb3uzYMbYVaPki1c8593KcpNIKcw/edit?usp=sharing"
                );
            table.string("status").defaultTo("In Progress");
            table.string("google_sub");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("contactsFunnel", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.text("status");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("contacts", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("position");
            table.string("email");
            table.string("phone");
            table.string("image_url").defaultTo("https://i.imgur.com/IryY30I.jpg");
            table.string("linked_in_url");
            table.string("status").defaultTo("In Progress");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("companiesFunnel", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.text("status");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("companies", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.string("name");
            table.string("position_to_fill");
            table.string("posting_url");
            table.string("location");
            table.string("postcode");
            table.string("street_name");
            table.string("state");
            table.string("status").defaultTo("Preparing");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("todos", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.text("name");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("faqs", (table) => {
            table.increments("id").primary();
            table.text("question");
            table.text("answer");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("faqs")
        .dropTable("todos")
        .dropTable("companiesFunnel")
        .dropTable("contactsFunnel")
        .dropTable("companies")
        .dropTable("contacts")
        .dropTable("users");
};
