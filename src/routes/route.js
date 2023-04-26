const express = require('express');
const lodash = require('lodash')
var bodyParser = require('body-parser');
const { route } = require('express/lib/application');
const router = express.Router();





router.post('/persons', function (req, res) {
    let persons = [
        {
            name: "PK",
            age: 10,
            votingStatus: false
        },
        {
            name: "SK",
            age: 20,
            votingStatus: false
        },
        {
            name: "AA",
            age: 70,
            votingStatus: false
        },
        {
            name: "SC",
            age: 5,
            votingStatus: false
        },
        {
            name: "HO",
            age: 40,
            votingStatus: false
        }
    ]

let arr = []
let data = req.query.votingAge
for(let i of persons) {
    if(i.age >=data) {
        i.votingStatus = true
        arr.push(i)
    }
}
    res.send({satus:true,data:arr})
})


module.exports = router








