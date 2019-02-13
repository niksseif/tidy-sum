const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/income')


//========GET THE ROUTE FOR USERS INCOME
router.get('/', ctrl.getAllIncome);

module.exports = router