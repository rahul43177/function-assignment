const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authMW = require('../middlewares/authMiddleware')

router.post('/users',userController.users)
router.post('/login',userController.login)
router.get('/users/:userId', authMW.isValid ,userController.getUserData)
router.put('/users/:userId', authMW.isValid ,userController.update)
router.delete('/users/:userId', authMW.isValid ,userController.deleteData)


module.exports = router