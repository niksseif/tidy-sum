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
    console.log(id,'hello from modal update user')
    income = usersQuery.updateUserIncome(id,payload);
    console.log(income,"<<<income")
    return income.then(result =>{
        console.log(result,"<<<")
        return result;
    })
}
module.exports = { getAllUsers, getUserById, getUserIncomes, updateUserIncome }