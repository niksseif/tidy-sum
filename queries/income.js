const knex = require('./knex')
const uuid = require('uuid/v4');


//===============================
//MANAGE INCOME DATA GET USERS BY ID OR GET ALL THE USERS
//====================================================




//---GET ALL INCOME BY USER
getIncomeByUserId = (id) => {
    return knex('income')
        .where('user_id', id)
        .than(result =>{
           return result.json()
       })
}

