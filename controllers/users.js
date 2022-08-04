const { response, request } = require('express');


const usersGet = (req = request, res = response) =>{
    //Obtenermos los query que envian desde el front pueden ser opcionales
    const {q, nombre = 'Nom name', apikey, page = 1, limit} = req.query;


    // Implemntacion de los json para devolver respuestas de la api en forma de objetos
    res.json({
        ok:true,
        msg: 'get API - controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usersPut = (req, res) =>{
    //Obtenermos la data que nos envian desde el front
    const id = req.params.id;

    // Implemntacion de los json para devolver respuestas de la api en forma de objetos
    res.json({
        ok:true,
        msg: 'put API - controller',
        id
    });
}

const usersPost = (req, res = response) =>{

    const {nombre, edad} = req.body;


    // Implemntacion de los json para devolver respuestas de la api en forma de objetos
    res.json({
        ok:true,
        msg: 'post API - controller',
        nombre,
        edad
    });
}

const usersPatch = (req, res) =>{
    // Implemntacion de los json para devolver respuestas de la api en forma de objetos
    res.json({
        ok:true,
        msg: 'patch API - controller'
    });
}



const usersDelete = (req, res) =>{
    // Implemntacion de los json para devolver respuestas de la api en forma de objetos
    res.json({
        ok:true,
        msg: 'delete API - controller'
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersPatch,
    usersDelete
}