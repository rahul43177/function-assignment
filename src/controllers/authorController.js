const authorModel = require('../models/authorModel')
const AuthorModel = require('../models/authorModel') 

const createAuthor = async function(req,res) {
  let data = req.body
  let authorCreated = await AuthorModel.create(data)
  res.send({author : authorCreated})
}

const getAuthorsData = async function (req,res) {
  let authors = await AuthorModel.find()
  res.send({author : authors})
}

module.exports.createAuthor=createAuthor
module.exports.getAuthorsData=getAuthorsData
