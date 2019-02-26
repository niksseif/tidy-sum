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
createIncome = async (req, res, next) => {
    try {
        let payload = await req.body.income
        let promise = await model.createIncome(payload)
        return res.status(200).json(promise)
    } catch (error) {
        console.error('error creating income', error)
    }
}

//============  DELETE INCOME
deleteIncome = async (req, res, next) => {
    try {
        let id = await req.params.incomeid
        let promise = await model.deleteIncome(id)
        return  res.status(200).json(promise)
    } catch(error) {
        console.error('error creating income', error)
    }
}

module.exports = { getAllIncome,createIncome,deleteIncome }