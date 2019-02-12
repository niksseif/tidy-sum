
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        //incrementing table id 
        table.increments()
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.specificType('hashed_password', 'char(60)');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
