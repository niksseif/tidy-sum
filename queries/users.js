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
module.exports = { getAllUsers, getUserById, createUser, deleteUser, getUserIncomes}