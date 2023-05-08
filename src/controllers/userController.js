const mongoose = require('mongoose')
const userModel = require('../models/userModel')

const createUser = async function(req,res) {
    let saved = req.body 
    let create = await userModel.create(saved)
    res.send({created : create})
}



module.exports.createUser = createUser