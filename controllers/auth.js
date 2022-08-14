const { response } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require("../helpers/generarJWT");


const login = async (req, res = response) => {

    const {correo, password} = req.body;

    try {

        // Verificar si el email existe
        const usuario = await Usuario.findOne({correo});
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario y/o contraseña incorrectos - correo'
            });
        }

        // Verficamos si el ususario esta activo en la bd
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario y/o contraseña incorrectos - estado:false'
            });
        }

        // Verficamos la contraseña
        const validarPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validarPassword) {
            return res.status(400).json({
                msg: 'Usuario y/o contraseña incorrectos - password'
            });
        }

        // Generamos el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}


module.exports = {
    login
}