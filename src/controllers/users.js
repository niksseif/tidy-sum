const model = require('../models/users')




getAllUsers = async (req, res, next) => {
    //TODO: ADD AUTH HERE 
        try {
            let promise = await model.getAllUsers()
            res.status(200).json(promise);
        } catch {
            console.error('you have no permission')
        }

}

getUserIncome = async (req, res, next) => {
    try {
        let payload = req.params
        
        let promise = await model.getUserIncomes(payload.userid)
        
        res.status(200).json(promise)
    } catch {
        
    }
}

module.exports = { getAllUsers, getUserIncome}