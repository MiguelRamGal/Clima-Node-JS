//Hago instancia de mi librería AXIOS, la cual me permite hacer peticiones a APIS
const axios = require('axios');


const getLugarLatLng = async (direccion) => { //Declaro mi función de tipo ASYNC
    //Mando a llamar una petición con AXIOS de tipo get
    let encodeURL = encodeURI(direccion)//Hago un encode de la dirección para que substituya los caracteres por los de una URL normal

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}o&key=AIzaSyCfnFfVbhHelry8rlHbKZHGdA61tk2xyvA`)//Mando mi peticioón con un AWAIT para que espere el resultado
    
    //Comparo si hay una respuesta erroneo
    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad: ${direccion}`)//imprimo el error
    }else{
        //manejo la información
        let location = resp.data.results[0];
        let coords = resp.data.results[0].geometry.location;

        return {
            direccion: location.formatted_address,
            lat: coords.lat,
            lng: coords.lng
        }
    }
}

module.exports = {
    getLugarLatLng
}