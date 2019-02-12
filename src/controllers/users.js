const model = require('../models/users')




getAllUsers = async (req, res, next) => {
    //TODO: ADD AUTH HERE 
        try {
            let promise = await model.getAllUsers()
            res.status(200).json(promise);
        } catch {
            console.error('this error is from controller')
        }

}

module.exports={ getAllUsers}