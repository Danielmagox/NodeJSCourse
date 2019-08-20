const validator = require('validator')
const {add,mul} = require('./utils.js')
const cad = require('./notes.js')
console.log(add(5,10))
console.log(mul(5,10))
console.log(cad());
console.log(validator.isEmail('daniel130596@gmail.com'))