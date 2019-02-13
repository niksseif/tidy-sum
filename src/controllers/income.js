const model = require('../models/income')




getAllIncome = async (req, res, next) => {
    //TODO: 
    try {
        let promise = await model.getUserAllIncome()
        res.status(200).json(promise);
    } catch {
        console.error('this error is from controller')
    }
}


module.exports = { getAllIncome,getUserIncome }