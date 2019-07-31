
exports.up = (knex) =>
    knex.schema.createTable("users", table => {
        table.increments();
        table
            .string("email", 128)
            .notNullable()
            .unique();
        table
            .string("password", 128)
            .notNullable();
    })
    .createTable("projects", table => {
        table.increments();
        table
            .string("name", 128)
            .notNullable();
        table
            .string("description", 128)
            .notNullable();
        table
            .boolean("completed")
            .notNullable();
        table
            .integer("user_id")
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });


exports.down = knex => knex.schema.dropTableIfExists("users");