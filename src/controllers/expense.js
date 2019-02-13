const model = require('../models/expense')




getAllExpense = async (req, res, next) => {
    //TODO: 
   
    try {
        let promise = await model.getUserExpense()
        res.status(200).json(promise);
    } catch {
        console.error('you have no permission')
    }
}
module.exports = { getAllExpense } 