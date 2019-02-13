
exports.up = function (knex, Promise) {
    return knex.schema.createTable('balance', (table) => {
        table.increments();
        table.integer('users_id').notNullable().references('users.id');
        table.integer('total');
        table.timestamps(true, true)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('balance')
}
