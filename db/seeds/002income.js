
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('income').del()
    .then(function () {
      // Inserts seed entries
      return knex('income').insert([
        { users_id: '1', source:'mine4now', description:'this paid for the first week of January', amount:'100', label:'front-end development', total:'100' },
        { users_id: '1', source: 'mine4now', description: 'this paid for the second week of January', amount: '100', label: 'front-end development', total: '100'},
        { users_id: '1', source: 'mine4now', description: 'this paid for the third week of January', amount: '100', label: 'front-end development', total: '100'}
      ]);
    });
};
