const request = require('request')

const url = 'https://api.darksky.net/forecast/aaef0c55dadde1438c3f358395a7ecc1/28.5620200,-16.3325400?units=si&lang=en' //Podemos añadir opciones al request ?Key=value&Key=value
                                                                                                               //pasamos las unidades a sistema internacional
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoiZGFuaWVsbWFnb3giLCJhIjoiY2sxMm1jZWhkMDA3ZzNlbzRyZGx3aWtocyJ9.oDrBWGQs_hLjQmT4uX5oGA'                                                                                                                
                                                                                                               
request({ url: url,json: true }, (error, response) => {  //Hacemos el request a la url de la pagina que nos da el tiempo y lo parseamos directamente
    //console.log(response)
    //const data = JSON.parse(response.body)   //Parseamos el JSON y podemos acceder a lo que nos interesa  (ahora lo hacemos arriba)  
    //console.log(data.currently)
    console.log(response.body.daily.data[0].summary + " It is currently " + 
    response.body.currently.temperature + " out " + " There is a " + response.body.currently.precipProbability + " % change of rain")
})

//Le pasamos la URL y pillamos la latitud y la longitud
request({url: geocodeURL, json: true},(error, response) => {
    let latitude = response.body.features[0].center[1]
    let longitude = response.body.features[0].center[0]
    console.log(latitude , longitude)
})



const Faren_to_Cel = (degrees) => ((degrees - 32) / 1.8)    //Para convertir los F a C
