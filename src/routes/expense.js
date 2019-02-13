const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/expense')


//========GET THE ROUTE FOR USERS EXPENSE
router.get('/', ctrl.getAllExpense);

module.exports = router