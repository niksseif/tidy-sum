const knex = require('./knex')
const uuid = require('uuid/v4');


//===============================
//MANAGE INCOME DATA GET USERS BY ID OR GET ALL THE USERS
//====================================================




//---GET ALL INCOME BY USER ID
getAllIncomes = () => {
    return knex('income')
    .join('users', 'users.id', '=', 'income.users_id')
        .select(
            'users.id',
            'income.id',
            'income.source',
            'income.description',
            'income.amount',
            'income.label',
            'income.total'
        )
        .orderBy('income.created_at', 'desc')
}


//----------CREATE INCOME
createIncome = payload =>{
    return knex('income')
    .insert(payload)
    .returning('*')
}


//------- DELETE INCOME---
deleteIncome = id => {
return knex('income')
    .where('id',id)
    .del()
    .then(result =>{
        return knex('income')
        .join('users','users_id', '=', 'income.users_id')
            .select(
                'users.id',
                'income.id',
                'income.source',
                'income.description',
                'income.amount',
                'income.label',
                'income.total'
            )
            .orderBy('income.created_at', 'desc')
    })
}

module.exports = { getAllIncomes, createIncome, deleteIncome }