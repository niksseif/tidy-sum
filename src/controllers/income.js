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
//------- ----- CREATE INCOME
createIncome = payload =>{
    return knex('income')
    .insert(payload)
    .returning('*')
}

//============  DELETE INCOME
deleteIncome = async (req, res, next) => {
    try {
        let id = await req.params.id
        let promise = await model.deleteIncome(id)
        return !promise.result ? next(promise) : res.status(200).json(promise)
    } catch {
        throw error;
    }
}

module.exports = { getAllIncome,createIncome,deleteIncome }