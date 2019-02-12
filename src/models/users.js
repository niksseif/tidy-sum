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
module.exports={getAllUsers,getUserById}