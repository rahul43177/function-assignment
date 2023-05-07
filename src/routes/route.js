const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const userController = require('../controllers/userController')
const bookController = require('../controllers/bookControllers')





router.post('/createBook',bookController.createBook)  //first problem done 
router.post('/bookList',bookController.bookList)
router.post('/getBooksByYear',bookController.getBooksByYear)
router.post('/getParticularBook',bookController.getParticularBooks)
router.get('/getXINRBooks',bookController.getXINRBooks)
router.post('/getRandomBooks',bookController.getRandomBooks)
router.get('/bookPrice', bookController.bookPrice)
module.exports = router