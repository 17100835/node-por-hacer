const fs = require('fs');

let listaPorHacer = [];

const cargarDB = () => {

    try {
        listaPorHacer = require('../bd/data.json');
    } catch (error) {
        listaPorHacer = [];
    }

}


const guardarBD = () => {

    return new Promise((resolve, reject) => {

        let data = JSON.stringify(listaPorHacer);

        fs.writeFile('bd/data.json', data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve('Se guardo correctamente');
            }

        });

    })
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listaPorHacer.push(porHacer)

    guardarBD();

    return porHacer;

}

const getListado = () => {

    cargarDB();
    return listaPorHacer;
    // return [{ descripcion, completado }] = listaPorHacer;

}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardarBD();
        return true;

    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listaPorHacer.filter(tarea => tarea.descripcion != descripcion);

    if (nuevoListado.length === listaPorHacer.length) {
        return false;
    } else {
        listaPorHacer = nuevoListado;
        guardarBD(listaPorHacer);
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}