const express = require('express');
const lodash = require('lodash')
var bodyParser = require('body-parser');
const { route } = require('express/lib/application');
const router = express.Router();


router.get('/test-me', function (req, res) {  //question number 1
    let array = [1, 2, 3, 5, 6, 7]
    let sumOfNumbers = 0
    for (let i = 0; i < array.length; i++) {
        sumOfNumbers = sumOfNumbers + array[i]
    }
    let first = array[array.length - 1]
    let second = array[0] - 1
    let firstSum = first * (first + 1) / 2
    let secondSum = second * (second + 1) / 2
    let total = firstSum - secondSum
    let missingNumber = total - sumOfNumbers
    res.send(`The missing number is ${missingNumber}`)
});


router.get('/test-you', function (req, res) {   //Question number - 2
    let array = [33, 34, 35, 37, 38]
    let sumOfNumbers = 0
    for (let i = 0; i < array.length; i++) {
        sumOfNumbers = sumOfNumbers + array[i]
    }
    let first = array[array.length - 1]
    let second = array[0] - 1
    let firstSum = first * (first + 1) / 2
    let secondSum = second * (second + 1) / 2
    let total = firstSum - secondSum
    let missingNumber = total - sumOfNumbers
    res.send(`The missing number is ${missingNumber}`)
})


module.exports = router


