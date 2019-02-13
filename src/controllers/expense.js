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

///======================= CREATE EXPENSE

createExpense = async(req, res, next) => {
    try {
        let payload = await req.body
        let promise = await model.createExpense(payload)
        return promise.error ? next(promise) : res.status(200).json(promise)
    } catch (error) {
        console.error('error creating expense', error, status)
    }
}

//======================DELETE EXPENSE 

deleteExpense = async( req, res, next) => {
    try{
        let id = await req.params.id
        let promise = await model.deleteExpense(id)
        return !promise.result ? next(promise): res.status(200).json(promise)
    } catch {
        throw error;
    }
}
module.exports = { getAllExpense, createExpense,deleteExpense } 