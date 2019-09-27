const request = require('request')

const url = 'https://api.darksky.net/forecast/aaef0c55dadde1438c3f358395a7ecc1/28.5620200,-16.3325400'

request({ url: url }, (error,response) => {  //Hacemos el request a la url de la pagina que nos da el tiempo
    //console.log(response)
    const data = JSON.parse(response.body)   //Parseamos el JSON y podemos acceder a lo que nos interesa   
    console.log(data.currently)
})



const Faren_to_Cel = (degrees) => ((degrees - 32) / 1.8)    //Para convertir los F a C
