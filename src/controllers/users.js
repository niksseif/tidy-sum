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
//get user income 
getUserIncome = async (req, res, next) => {
    try {
        let payload = req.params
        
        let promise = await model.getUserIncomes(payload.userid)
        
        res.status(200).json(promise)
    } catch {
        console.error('you have no permission')
    }
}

//update user income
updateUserIncome = async (req,res,next) =>{
    // try{
        let id = req.body.id
        let payload = req.body
        let promise = model.updateUserIncome(id,payload)
        promise.then(result =>{
            res.status(201).json(result)
        })
        promise.catch(error => {
            return error;
        })
    // } 
    // catch {
    //      console.error('you have no permission')
    // }
}
//--------Add post to userIncome
//------- ----- CREATE INCOME
createUserIncome = async (req, res, next) => {
    try {
       
        let payload = await req.body
        let promise = await model.createUserIncome(payload)
        
        return res.status(200).json(promise)
    } catch (error) {
        console.error('error creating Userincome', error)
    }
}
//============  DELETE INCOME
deleteUserIncome = async (req, res, next) => {
        
       
    try {
        let id = await req.params.incomeid
        
        let promise = await model.deleteUserIncome(id)
        
        return res.status(200).json(promise)
    } catch (error) {
        console.error('error creating income', error)
    }
}

module.exports = { getAllUsers, getUserIncome, updateUserIncome, createUserIncome, deleteUserIncome}