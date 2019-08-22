const fs= require('fs')

//lees del archivo json
//conviertes el buffer binario a un string util
//cogemos ese String y lo parseamos como JSON 
//ya podemos acceder a los atributos

var Buffer = fs.readFileSync('1-json.json')     
var dataJSON = Buffer.toString()
var data = JSON.parse(dataJSON)
data.name = "Danichi"
data.age = "22"

var planetJSON = JSON.stringify(data)  // transformarlo nuevamente a String

console.log(data.age + " " +  data.name)

fs.writeFileSync('2-json.json',planetJSON);


