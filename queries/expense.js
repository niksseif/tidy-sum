const knex = require('./knex')
const uuid = require('uuid/v4');


//===============================
//MANAGE EXPENSE DATA 
//====================================================




//---GET ALL EXPENSES BY USER ID
getAllExpenses = () => {
    return knex('expenses')
        .join('users', 'users.id', '=', 'expenses.users_id')
        .select(
            'users.id',
            'expenses.id',
            'expenses.category',
            'expenses.description',
            'expenses.amount',
            'expenses.total'
        )
}
module.exports ={ getAllExpenses }