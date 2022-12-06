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
            table.string("target_title").defaultTo("Front End Developer");
            table.string("target_date").defaultTo("31.12.2022");
            table.string("target_income").defaultTo("AUSD 70,000");
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
        .createTable("leads", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.string("his_or_her");
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("position");
            table.string("email");
            table.string("phone");
            table.string("image_url").defaultTo("https://i.imgur.com/IryY30I.jpg");
            table.string("linked_in");
            table.string("company").notNullable();
            table.string("street_name");
            table.string("city");
            table.string("state");
            table.string("postcode");
            table.string("country");
            table.text("icebreaker");
            table.text("paragraph_one");
            table.text("paragraph_two");
            table.text("paragraph_three");
            table.text("call_to_action");
            table.string("status").defaultTo("In Progress");
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
            table.string("location");
            table.string("position");
            table.string("posting_url");
            table.string("resume");
            table.string("cover_letter");
            table.string("date_posted");
            table.string("hours");
            table.string("status").defaultTo("Preparing");
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
        .dropTable("companies")
        .dropTable("leads")
        .dropTable("users");
};
