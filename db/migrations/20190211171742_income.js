
exports.up = function (knex, Promise) {
    return knex.schema.createTable('income', (table) => {
        table.increments();
        table.integer('users_id').notNullable().references('users.id');
        table.string('source');
        table.string('description');
        table.integer('amount');
        table.string('label');
        table.integer('total')
        table.timestamps(true, true)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('income')
}
