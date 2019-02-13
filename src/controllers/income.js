const model = require('../models/income')




getAllIncome = async (req, res, next) => {
    //TODO: 
    try {
        let promise = await model.getUserAllIncome()
        res.status(200).json(promise);
    } catch {
        console.error('you have no permission')
    }
}


module.exports = { getAllIncome,getUserIncome }