const validator = require('validator')
const chalk = require('chalk');
const {add,mul} = require('./utils.js')
const cad = require('./notes.js')
//Para subirlo a github mejor borrar la carpeta node_modules y despues hace npm install ya que la info la obtiene del package-lock.json
// console.log(add(5,10))
// console.log(mul(5,10))
// console.log(cad());
// console.log(validator.isEmail('daniel130596@gmail.com'))
// console.log(chalk.bold.inverse.blue("Success") +  chalk.red(" ! ")); 

//Hasta aqui seccion 2 ************************ ////

const command = process.argv[2] //Forma tradicional de pillar args por consola

if(command === 'add'){
    console.log('Adding note!')
}else if (command === 'remove'){
    console.log('Removing note!')
}