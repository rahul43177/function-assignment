const productModel = require('../models/productModel')
const orderModel =require('../models/orderModel')
const userModel = require('../models/userModel')

const createOrder = async function(req,res) {
    let data = req.headers.isfreeappuser
    let userId = req.body.userId
    let productId = req.body.productId

    const user = await userModel.findById(userId)
    const product = await productModel.findById(productId)
  
    const more = user.balance - product.price
    if(data == "false") {   
        if(more > 0) {
            const userBalance = await userModel.findByIdAndUpdate(userId , 
                {$set : {balance : more}} ,
                {new : true})         
            
             req.body.amount = product.price
             const orderInfo = req.body
             const orderConfirm = await orderModel.create(orderInfo)
             res.send({msg : "Order created successfully , you are a bade log ", orderDetails : orderConfirm})      
        }
        else if(more < 0) {
            res.send({error : `Insufficient balance`})
        }
    }
    else { 
        req.body.amout = 0
        const orderInfo = req.body
        const orderConfirm = await orderModel.create(orderInfo)
        res.send({msg : "Order done " , orderDetails : orderConfirm})    
    }
}


module.exports.createOrder = createOrder;
