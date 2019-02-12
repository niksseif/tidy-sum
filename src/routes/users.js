const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')


//========GET THE ROUTE FOR YSER LIST
router.get('/', ctrl.getAllUsers)

module.exports = router