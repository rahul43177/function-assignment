const mongoose = require('mongoose')
const userModel = require('../models/userModel')


const createUser = async function(req,res) {
    let data = req.body
    let savedData =  await userModel.create(data)
    res.send({data:savedData})
}
const getUser = async function (req, res) {
    let allUsers = await userModel.find()
    res.send({data : allUsers})
}

module.exports.createUser = createUser
module.exports.userData = getUser