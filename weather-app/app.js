const request = require('request')

const url = 'https://api.darksky.net/forecast/aaef0c55dadde1438c3f358395a7ecc1/28.5620200,-16.3325400?units=si&lang=en' //Podemos añadir opciones al request ?Key=value&Key=value
                                                                                                               //pasamos las unidades a sistema internacional
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Tegueste.json?access_token=pk.eyJ1IjoiZGFuaWVsbWFnb3giLCJhIjoiY2sxMm1jZWhkMDA3ZzNlbzRyZGx3aWtocyJ9.oDrBWGQs_hLjQmT4uX5oGA'                                                                                                                
                                          //Hay APIS mejores                                                                     
request({ url: url,json: true }, (error, response) => {  //Hacemos el request a la url de la pagina que nos da el tiempo y lo parseamos directamente
    if(error){                                                  //Error general al conectar a la pagina
        console.log('Unable to connect to weather service!')
    }else if(response.body.error){                                //Se conecta pero el formato no está bien escrito
        console.log('Unable to find location')
    }else{
        console.log(response.body.daily.data[0].summary + " It is currently " + //Todo correcto
        response.body.currently.temperature + " out " + " There is a " + response.body.currently.precipProbability + " % change of rain")
    }
})

//Le pasamos la URL y pillamos la latitud y la longitud
request({url: geocodeURL, json: true},(error, response) => {
    if(error){
        console.log('Unable to connect to weather service!')
    }else if(response.body.features.length === 0){
        console.log('Unable to find location')
    }else{
    let latitude = response.body.features[0].center[1]
    let longitude = response.body.features[0].center[0]
    console.log(latitude , longitude)
    }
    
})



const Faren_to_Cel = (degrees) => ((degrees - 32) / 1.8)    //Para convertir los F a C
