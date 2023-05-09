const mongoose = require('mongoose')
const object_Id = mongoose.Schema.Types.ObjectId
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
    isFreeAppUser : Boolean ,
    date : String 
},{timestamps : true})

module.exports = mongoose.model('Order',orderSchema)



/**  
userId - 64595879d873718029257ad5
product id = 6459597cd873718029257ad9
 */