const publisherModel = require('../models/publisherModel')


const createPublisher = async function(req,res) {
    let data = req.body
    let saved = await publisherModel.create(data)
    res.send({publisherData : saved})
}


module.exports.createPublisher=createPublisher