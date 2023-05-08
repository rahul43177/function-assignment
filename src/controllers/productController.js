const productModel = require('../models/productModel')

const createProduct = async function(req,res) {
    let data = req.body
    let create = await productModel.create(data)
    res.send({msg : create})
}


module.exports.createProduct=createProduct