const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
//Siguiendo el hilo de ejecucion primero lo que hacemos es pasarle al programa el 
//titulo y el cuerpo y este se lo pasa a la funcion addNote que está en el otro fichero,
//lo recoge de los argumentos
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {  //funcion en ES6
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {   
        notes.removeNote(argv.title)
    }
})


// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()