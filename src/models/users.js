const usersQuery = require('../../queries/users')




//=============Get all the users ======
const getAllUsers = () => {
    users = usersQuery.getAllUsers()

    return users.then(result => {
        return result
    })
}
//==========GET USER BY ID
const getUserById = id => {
    user = usersQuery.getUserById(id)

    return user.then(result => {
        return !result ? { message: 'user not found', status: 404 } : result
    })
}
//----------GET USER INCOME
const getUserIncomes =  (id) => {
    incomes =  usersQuery.getUserIncomes(id)
    return incomes.then(result =>{
        return result;
    });
}
//------ UPDATE USER INCOME

const updateUserIncome = (id,payload) =>{
    income = usersQuery.updateUserIncome(id,payload);
    // return income.then(result =>{
    //     return result;
    // })
    if(!income){
        return { error: 'error creating income', status: 404 }
    } else {
        return income;
    }
}
//========== CREATE INCOME
const createUserIncome = async (payload) => {
    income = await usersQuery.createUserIncome(payload)
     if (income.error ){
         return { error: 'error creating income', status: 404 }
     }  else {
            return income;
     } 
}
//=========== DELETE INCOME 
const deleteUserIncome = async (id) => {
    income = await usersQuery.deleteUserIncome(id)
   
    if (income.error ){
        return  { error: 'error deleting income', status: 404 } 
    }else {
             return income;
        }
}
module.exports = { getAllUsers, getUserById, getUserIncomes, updateUserIncome, createUserIncome, deleteUserIncome}