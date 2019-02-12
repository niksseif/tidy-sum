
exports.up = function (knex, Promise) {
    return knex.schema.createTable('expenses', (table) => {
        table.increments();
        table.integer('users_id').notNullable().references('users.id');
        table.string('category');
        table.string('description');
        table.integer('amount');
        table.integer('total');
        table.timestamps(true, true)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('expenses')
}
