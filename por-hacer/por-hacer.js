const fs = require('fs');

let listenarray = [];

const guardarData = () => {
    let data = JSON.stringify(listenarray);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo guardar', err);
        }
    });
};

const cargarData = () => {
    try {

        listenarray = require('../db/data.json');
    } catch (error) {
        listenarray = [];
    }
};

const crear = (descripcion) => {
    cargarData();
    let porHacer = {
        descripcion,
        completado: false
    };

    listenarray.push(porHacer);
    guardarData();
    return porHacer;
};

const getListar = () => {
    cargarData();
    return listenarray;

};

const actualizar = (descripcion, completado = true) => {
    cargarData();
    let index = listenarray.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listenarray[index].completado = completado;
        guardarData();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarData();
    let nuevoListado = listenarray.filter(tarea => {
        return tarea.descripcion != descripcion;
    });

    if (nuevoListado.length == listenarray.length) {
        return false;
    } else {
        listenarray = nuevoListado;
        guardarData();
        return true;
    }
};
module.exports = {
    crear,
    getListar,
    actualizar,
    borrar
}