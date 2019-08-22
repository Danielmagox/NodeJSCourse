const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()                               //note es un iterador, no un parámetro
    const duplicateNotes = notes.filter(function (note) { //la funcion es llamada por cada elemento del array (se crea dentro de filter),
        return note.title === title                        //si el titulo de cada array es igual a el titulo pasado por argumento retornalo                                            
    })

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

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)     //Si existe el archivo retorna el JSON parseado
    } catch (e) {
        return []                       //Si no existe el archivo no retorna nada, []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}