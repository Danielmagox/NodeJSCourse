const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs');
const {add,mul} = require('./utils.js')
const cad = require('./notes.js')
//Para subirlo a github mejor borrar la carpeta node_modules y despues hace npm install ya que la info la obtiene del package-lock.json
// console.log(add(5,10))
// console.log(mul(5,10))
// console.log(cad());
// console.log(validator.isEmail('daniel130596@gmail.com'))
// console.log(chalk.bold.inverse.blue("Success") +  chalk.red(" ! ")); 

//Hasta aqui seccion 2 ************************ ////

// const command = process.argv[2] 

// if(command === 'add'){
//     console.log('Adding note!')
// }else if (command === 'remove'){
//     console.log('Removing note!')
// }

//Forma tradicional de pillar args por consola


//version
yargs.version('1.1.0')

//add, remove, read, list
//Creamos el comando de antes
yargs.command({                     //La ejecucion de esto seria node app.js --title="cosa" --body="otracosa"
    command: 'add',
    describe: 'add a new note',
    builder:{
        title: {                    //creamos nuestra opcion title para add
            describe: 'Note title',
            demandOption:true,      //significa que necesita si o si el titulo
            type: 'string'          //Y que ademas tiene que ser un String
        },
        body: {                     //creamos nuestra opcion body para add
            describe: 'Note body',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv){       //Creamos la salida
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }
})

//Creamos el comando remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        console.log('listing notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note!')
    }
})


yargs.parse()   //Para ejecutar bien las funciones del yargs