const lugar = require('./modules/lugar')//Importo mi archivo de lugar
const clima = require('./modules/clima')//Importo mi archivo de clima

//COMANDO
//node app -d "Leon Guanajuato"

//Hago instancia de mi librería Yargs, pero ahora no declararé comandos, declararé opciones
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion)=>{

    try {
        let coords = await lugar.getLugarLatLng(direccion)//Pongo un then y catch devido a que la función a la que estoy mandando a llamar es una promesa
        let temp = await clima.getClima(coords.lat,coords.lng);

        return `El clima en ${coords.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
    
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))
