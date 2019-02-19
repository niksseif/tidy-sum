const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')

  
//========GET THE ROUTE FOR USER 

router.get('/', ctrl.getAllUsers)
router.get('/:userid/income', ctrl.getUserIncome)
router.put('/:userid/income', ctrl.updateUserIncome)

router.post('/:userid/income',ctrl.createUserIncome)
router.delete('/:userid/income/:incomeid', ctrl.deleteUserIncome)
module.exports = router