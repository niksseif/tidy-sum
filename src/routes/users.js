const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')


//========GET THE ROUTE FOR YSER LIST
console.log('hitting routes in user')
console.log(ctrl.getUserIncome,"<<<ctrl >>>>>")
router.get('/', ctrl.getAllUsers)
router.get('/:userid', ctrl.getUserIncome)
module.exports = router