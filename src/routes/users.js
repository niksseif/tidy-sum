const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')


  
//========GET THE ROUTE FOR USER 

router.get('/', ctrl.getAllUsers)
router.get('/:userid/income', ctrl.getUserIncome)
router.put('/:userid/income', ctrl.updateUserIncome)

router.post('/:userid/income',ctrl.createUserIncome)
router.delete('/:userid/income/:incomeid', ctrl.deleteUserIncome)

router.get('/:userid/expense',ctrl.getUserExpense)
router.post('/:userid/expense',ctrl.createUserExpense)
router.put('/:userid/expense',ctrl.editUserExpense)
router.delete('/:userid/expense/:expenseid', ctrl.deleteUserExpense)
module.exports = router