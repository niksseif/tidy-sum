const knex = require('./knex')
const uuid = require('uuid/v4');


//===============================
//MANAGE USER DATA GET USERS BY ID OR GET ALL THE USERS
//====================================================


//-----GET ALL THE USERS
getAllUsers = () => {
    return knex('users')
}
//---GET USERS BY ID
getUserById =(id) => {
    return knex('users')
        .where('id', id)
        .first()
}

//------GET USERS:id/income
getUserIncomes = id => {
    return knex('income')
        .where('users_id', id)
}
//-------- Update USER INCOME
updateUserIncome = (id, payload) => {
    console.log(id,"<<<<id from querries")
    return knex('income')
    .where('id', id)
    .update(payload)
    .returning('*')
}

//-----CREATE USERS
createUser = (payload) =>{
    return knex('users')
    .insert(payload)
    .returning('*')
}

//------delete the users
deleteUser =(id) =>{
    return knex('users')
    .where ('id', id)
    .del()
    .than(result =>{
        return knex('users')
    })
}
//----------CREATE INCOME
createUserIncome = (payload,id) => {
    return knex('income')
        .where('users.id',id)
        .insert(payload)
        .orderBy('income.created_at', 'desc')
        .returning('*')
}


//------- DELETE INCOME---
deleteUserIncome = id => {
    return knex('income')
        .where('id', id)
        .del()
        .then(result => {
            console.log(result,"<<<<result from querry")
            return knex('income')
                .join('users', 'users_id', '=', 'income.users_id')
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
//------GET USERS:id/expense
getUserExpense = id => {
    return knex('expenses')
        .where('users_id', id)
}

//========= CREATE EXPENSE 
createUserExpense = payload => {
    return knex('expenses')
        .insert(payload)
        .returning('*')
}

//-------- EDIT USER EXPENSE
editUserExpense = (id, payload) => {
    return knex('expenses')
        .where('id', id)
        .update(payload)
        .returning('*')
}
//------- DELETE EXPENSE---
deleteUserExpense = id => {
    return knex('expenses')
        .where('id', id)
        .del()
        .then(result => {
            
            return knex('expenses')
                .join('users', 'users_id', '=', 'expenses.users_id')
                .select(
                    'users.id',
                    'expenses.id',
                    'expenses.description',
                    'expenses.amount',
                    'expenses.total'
                )
                .orderBy('expenses.created_at', 'desc')
        })
    }
module.exports = { 
    getAllUsers, 
    getUserById,
     createUser, 
     deleteUser,
      getUserIncomes, 
      updateUserIncome, 
      createUserIncome, 
      deleteUser, 
      deleteUserIncome, 
      getUserExpense, 
      createUserExpense, 
      editUserExpense, 
      deleteUserExpense
    }