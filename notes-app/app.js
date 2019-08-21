const validator = require('validator')
const chalk = require('chalk');
const {add,mul} = require('./utils.js')
const cad = require('./notes.js')
//Para subirlo a github mejor borrar la carpeta node_modules y despues hace npm install ya que la info la obtiene del package-lock.json
console.log(add(5,10))
console.log(mul(5,10))
console.log(cad());
console.log(validator.isEmail('daniel130596@gmail.com'))
console.log(chalk.bold.inverse.blue("Success") +  chalk.red(" ! "));