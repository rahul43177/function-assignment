const userModel = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const users = async function(req,res) {
    let data = req.body 
    let details = await userModel.create(data)
    res.send({data : details})
}

const login = async function(req,res) {
    let userName = req.body.emailId
    let password = req.body.password

    if(!userName || !password )  return res.send({status : false , error : "Invalid emailId or password "})  //to check wheather the email id and password are correct or not 
    const user = await userModel.findOne({emailId : userName , password : password})
    if(!user)   return res.send({status : false , error : "user name or password is incorrect "})

    const token = jwt.sign({
        userId : user._id ,
        email : user.emailId 
    },
    "secret-code-rahul"
    )
    res.setHeader("rahul-token" , token)
    res.send({status : true , token : token})

}

const getUserData = async function(req,res) {
    const id = req.params.userId

    const details = await userModel.findById(id)
    res.send({status : true , msg : details})
}

const update = async function(req,res) {
    let id = req.params.userId
    let toChange = req.body
    let user = await userModel.findByIdAndUpdate(id , {$set : toChange} , {new:true} )
    res.send({status : true , msg : user})
}


const deleteData = async function(req,res) {
    let id = req.body.userId
    let deleting = await userModel.findByIdAndUpdate(id , {$set : {isDeleted : true }} , {new : true})
    res.send({status : true , msg : deleting })
}



module.exports.users=users
module.exports.login=login
module.exports.getUserData =getUserData
module.exports.update=update
module.exports.deleteData=deleteData
