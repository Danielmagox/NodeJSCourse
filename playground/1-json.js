const fs= require('fs')

// const book = {
//     title: 'Harry Potter',
//     author: 'J.K Rowling'
// }

// const bookJSON =  JSON.stringify(book)      // es un String
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)      //Esto lo parsea y podemos pillar lo de dentro facilmente
// console.log(parseData)
// console.log(parseData.author)

// fs.writeFileSync('1-json.json', bookJSON)   


// const dataBuffer = fs.readFileSync('1-json.json')       //lees del archivo json
// const dataJSON = dataBuffer.toString();                 //conviertes el buffer binario a un string util
// const data = JSON.parse(dataJSON)                       //cogemos ese String y lo parseamos como JSON 
// console.log(data.title)                                 //ya podemos acceder a los atributos

var Buffer = fs.readFileSync('1-json.json')
var dataJSON = Buffer.toString()
var data = JSON.parse(dataJSON)
data.name = "Danichi"
data.age = "22"

var planetJSON = JSON.stringify(data)  // transformarlo nuevamente a String

console.log(data.age + " " +  data.name)

fs.writeFileSync('2-json.json',planetJSON);


