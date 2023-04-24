let text = "                    functionUp Technetium Backend Cohort                " //trim will all the spaces at the end and at the start
function upperCase() {
    console.log(text.toUpperCase()) //lowercase string to uppercase 
}
function lowerCase() {
    console.log(text.toLowerCase())
}
function trim() {
    console.log(text.trim()) //trim function will all the extra spaces from the start and at the ending
}

module.exports = {upperCase,lowerCase,trim} 
// or 
// module.exports.upper = upperCase
// module.exports.lower = lowerCase
// module.exports.trimming = trim 