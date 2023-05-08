const { default: mongoose } = require("mongoose")
const userModel = require("../models/userModel")
const productModel = require('../models/productModel')


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


module.exports.isValid= isValid