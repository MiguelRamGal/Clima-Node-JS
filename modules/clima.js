//Hago instancia de mi librería AXIOS, la cual me permite hacer peticiones a APIS
const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=002d5729a7cdd42b4f9f3bf1f6a714dd`)//Mando mi peticioón con un AWAIT para que espere el resultado

    if(resp.cod === '400'){
        throw new Error('La ubicación no existe')
    }else{
        return resp.data.main.temp;
    }
}

module.exports = {
    getClima
}