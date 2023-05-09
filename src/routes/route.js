const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const userModel = require('../models/userModel')
const commonMW = require('../middlewares/commonMiddleware')

router.post('/createProduct',productController.createProduct)
router.post('/createOrder' ,orderController.createOrder)
router.post('/createUser', commonMW.isValid , commonMW.validId, commonMW.exist,userController.createUser)




module.exports = router