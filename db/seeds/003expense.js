
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('expenses').del()
    .then(function () {
      // Inserts seed entries
      return knex('expenses').insert([
        {id: 1, users_id: '1', category:'grocery shopping', description:'bougth fish', amount:'50', total:'50'},
        {id: 2, users_id: '1', category:'cloth shopping', description:'bought dress', amount:'100', total:'100'},
        {id: 3, users_id: '1', category:'uber', description:'used uber to go to my meeting on Wednesday', amount:'5', total:'5'}
      ]);
    });
};
