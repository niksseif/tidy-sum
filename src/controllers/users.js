const model = require('../models/users')




getAllUsers = async (req, res) => {
    //TODO: ADD AUTH HERE 
        try {
            let promise = await model.getAllUsers()
            res.status(200).json(promise);
        } catch {
            console.error('you have no permission')
        }

}
//get user income 
getUserIncome = async (req, res) => {
    try {
        let payload = req.params
        
        let promise = await model.getUserIncomes(payload.userid)
        
        res.status(200).json(promise)
    } catch {
        console.error('you have no permission')
    }
}

//update user income
updateUserIncome = async (req,res) =>{
  
        let id = req.body.id
        let payload = req.body
        let promise = model.updateUserIncome(id,payload)
        promise.then(result =>{
            res.status(201).json(result)
        })
        promise.catch(error => {
            return error;
        })
    
}


//------- ----- CREATE INCOME
createUserIncome = async (req, res) => {
    try {
       
        let payload = await req.body
        let promise = await model.createUserIncome(payload)
        
        return res.status(200).json(promise)
    } catch (error) {
        console.error('error creating Userincome', error)
    }
}
//============  DELETE INCOME
deleteUserIncome = async (req, res) => {
        
       
    try {
        let id = await req.params.incomeid
        
        let promise = await model.deleteUserIncome(id)
        
        return res.status(200).json(promise)
    } catch (error) {
        console.error('error creating income', error)
    }
}

//GET USER EXPENSE______

getUserExpense = async (req, res) => {
    try {
        let payload = req.params

        let promise = await model.getUserExpense(payload.userid)
        res.status(200).json(promise)
    } catch {
        console.error('you have no permission')
    }
}
///======================= CREATE EXPENSE

createUserExpense = async (req, res) => {
    try {
        let payload = await req.body
        let promise = await model.createUserExpense(payload)
      
        return  res.status(200).json(promise)
    } catch (error) {
        console.error('error creating expense')
    }
}

//____________________EDIT USER EXPENSE
editUserExpense = async (req, res) => {
  
    let id = req.body.id
    let payload = req.body
    let promise = model.editUserExpense(id, payload)
 
    promise.then(result => {
        res.status(201).json(result)
    })
    promise.catch(error => {
        return error;
    })
  
}
//============  DELETE EXPENSE
deleteUserExpense = async (req, res) => {


    try {
        let id = await req.params.expenseid

        let promise = await model.deleteUserExpense(id)

        return res.status(200).json(promise)
    } catch (error) {
        console.error('error creating income', error)
    }
}
module.exports = { getAllUsers, getUserIncome, updateUserIncome, createUserIncome, deleteUserIncome, getUserExpense, createUserExpense, editUserExpense,deleteUserExpense}