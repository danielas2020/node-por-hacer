const fs = require('fs');

let listaPorHacer = [];

const cargarDB = () => {
    try {
        listaPorHacer = require('../db/data.json');
    } catch (error) {
        listaPorHacer = [];
    }
}

const guardaDB = () => {
    let data = JSON.stringify(listaPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err) throw new Error ('No se pudo guardar',err)
 
    });
}

const getListado = () => {
    cargarDB();
    return listaPorHacer;
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listaPorHacer.push(porHacer);
    guardaDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) =>{
    cargarDB();
    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardaDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let lista = listaPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listaPorHacer.length === lista.length) {
        return false;
    }else{
        listaPorHacer = lista;
        guardaDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}