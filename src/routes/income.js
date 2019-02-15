const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/income')


//========GET THE ROUTE FOR ALL INCOME
router.get('/', ctrl.getAllIncome);

//============= CREATE INCOME
router.post('/', ctrl.createIncome)

// ================= DELETE INCOME
router.delete('/:incomeid', ctrl.deleteIncome)

module.exports = router