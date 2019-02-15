
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'nik', email: 'nik@wonderland.com',hashed_password: '$2b$08$IfDQWzpC2Feke.tALtOElupO3NAIFI7OpJxFDxhmQkIuASTM.Mqyu'},
      ]);
    });
};
