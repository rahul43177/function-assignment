const mongoose = require('mongoose')
const object_Id = mongoose.Schema.Types.object_Id
const orderSchema = new mongoose.Schema({
    userId : {
        type : object_Id ,
        ref : 'User'
    } , 
    productId : {
        type : object_Id , 
        ref : 'Product'
    },
    amount : Number ,
    isFreeAppuser : Boolean ,
    date : String 
},{timestamps : true})

module.exports = mongoose.model('Order',orderSchema)