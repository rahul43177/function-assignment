const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const userController = require('../controllers/userController')
const bookController = require('../controllers/bookControllers')





router.post('/createBook',bookController.createBook)  //first problem done 
router.post('/bookList',bookController.bookList)
router.post('/getBooksByYear',bookController.getBooksByYear)




module.exports = router