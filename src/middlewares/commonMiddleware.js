const { default: mongoose } = require("mongoose")
const userModel = require("../models/userModel")
const productModel = require('../models/productModel')
const { response } = require("express")


const isValid= function ( req, res, next) {
    const head = req.headers.isFreeAppUser
    if(!head){
        res.send({error: "you are missing a mandatory header"})
    }
   else{
    // console.log(head)
    req.body.isFreeAppUser = head
    next()
   }
}

const validId = function(req,res,next) {
    const product = req.body.productId
    const user = req.body.userId
    if(!mongoose.isValidObjectId(product)) {
        res.send({error:"Invalid product Id"})
    }
    else if(!mongoose.isValidObjectId(user)){
        res.send({error:"invalid product Id"})
    }
    else { 
        next()
    }
}

const exist = async function(req,res,next) {
    const product = req.body.productId
    const user = req.body.userId
    const userExist = await userModel.findById(user)
    const productExist = await userModel.findById(product)

    if(!userExist  || !productExist) {
        if(!userExist) {
            res.send({error : "User with this Id doesn't exist"})
        }
        else {
            res.send({error : "product with this ID doesn't exist"})
        }

    }
    else {
        next()
    }

}



module.exports.validId=validId
module.exports.isValid= isValid
module.exports.exist=exist