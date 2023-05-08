const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')

router.post('/createProduct',productController.createProduct)






module.exports = router