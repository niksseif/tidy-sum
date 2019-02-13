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
        .orderBy('expense.created_at', 'desc')
}

//========= CREATE EXPENSE 
createExpense = payload => {
    return knex('expenses')
    .insert(payload)
    .returning('*')
}
//========== DELETE EXPENSE 
deleteExpense = id => {
    return knex('expenses')
    .where('id', id)
    .del()
    .then(result => {
        return knex('expenses')
        .join('users', 'users.id','=', 'expenses.users.id')
        .select(
            'expenses.id',
            'expenses.category',
            'expenses.description',
            'expenses.amount',
            'expenses.total'
        )
            .orderBy('expense.created_at', 'desc')
    })
}


module.exports ={ getAllExpenses,createExpense, deleteExpense }