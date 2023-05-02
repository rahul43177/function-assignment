const authordModel = require('../models/authorModel')
const bookModel = require('../models/bookModel')

let authors = async function(req,res) {
    let data = req.body
    let authorDetails = await authorModel.create(data) 
    res.sedn({data : authorDetails})
}

let getAuthors = async function(req,res) {
    let allAuthors = await authordModel.find()
    res.send({data : allAuthors})
}

module.exports.authors = authors
module.exports.getAuthors = getAuthors 
