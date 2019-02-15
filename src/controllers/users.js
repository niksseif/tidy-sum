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
    console.log('helloo from controler')
    console.log(req.body,"<<<req")
    try{
        let id = req.body.id
        let payload = req.body
        let promise = model.updateUserIncome(id,payload)
      
        res.status(204).json(promise)
    } catch {
         console.error('you have no permission')
    }
}

module.exports = { getAllUsers, getUserIncome, updateUserIncome}