const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()                                               //note es un iterador, no un parámetro
    const duplicateNotes = notes.filter(note => note.title === title)  //la funcion es llamada por cada elemento del array (se crea dentro de filter),
                                                                        //si el titulo de cada array es igual a el titulo pasado por argumento retornalo                                            )

    if (duplicateNotes.length === 0) {  //si es 0 no ha habido duplicados
        notes.push({    //se mete al JSON parseado el title y el body en formato JSON
            title: title,
            body: body
        })
        saveNotes(notes)    //se pasa a string en esta funcion que es la que hicimos anteriormente y despues se imprime en la misma
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green('Note removed'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red('Note Not found'))
    }

    saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)     //Si existe el archivo retorna el JSON parseado
    } catch (e) {
        return []                       //Si no existe el archivo no retorna nada, []
    }
}

//Prueba

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}