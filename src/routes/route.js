const express = require('express');
const lodash = require('lodash')
var bodyParser = require('body-parser');
const { route } = require('express/lib/application');
const router = express.Router();
let array =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]




router.get('/test-me', function (req, res) {  //question number 1
    let array = [1, 2, 3, 4, 6, 7]  //[3,4,5,7,8]  -> n(n+1)/2
    //the sum of all the elements of that array - sum 
    //sum till 1 to 7 
    let sumOfNumbers = 0
    for (let i = 0; i < array.length; i++) {
        sumOfNumbers = sumOfNumbers + array[i]
    }
    let first = array[array.length - 1]
    let second = array[0] - 1
    let firstSum = first * (first + 1) / 2  // -> n(n+1)/2
    let secondSum = second * (second + 1) / 2   // -> n(n+1)/2
    let total = firstSum - secondSum
    let missingNumber = total - sumOfNumbers
    res.send(`The missing number is ${missingNumber}`)
});


router.get('/test-you', function (req, res) {   //Question number - 2
    let array = [33, 34, 35, 36, 38]  //logic -> sum from (1-38)-(1-32) => (33-38)
    let sumOfNumbers = 0
    for (let i = 0; i < array.length; i++) {
        sumOfNumbers = sumOfNumbers + array[i]
    }
    let first = array[array.length - 1]  //last element 
    let second = array[0] - 1
    let firstSum = first * (first + 1) / 2   //n(n+1)/2
    let secondSum = second * (second + 1) / 2
    let total = firstSum - secondSum
    let missingNumber = total - sumOfNumbers
    res.send(`The missing number is ${missingNumber}`)
})



router.post('/players', function (req, res) {
    let details = req.body
    for (let i = 0; i < array.length; i++) {
        if (array[i].name == details.name) {
            return res.status(200).send(`This player details are already present`)
        }
    }
    array.push(details)
    return res.send(array)
})

module.exports = routerd