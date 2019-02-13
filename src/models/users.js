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

const getUserIncomes =  (id) => {
    console.log('hello form user  model')
    incomes =  usersQuery.getUserIncomes(id)
    console.log(incomes, "<<<u=incomes from userincome model")
    return incomes.then(result =>{
        return result;
    });
}
module.exports = { getAllUsers, getUserById, getUserIncomes }