const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')


//========GET THE ROUTE FOR USER 

router.get('/', ctrl.getAllUsers)
router.get('/:userid/income', ctrl.getUserIncome)
module.exports = router