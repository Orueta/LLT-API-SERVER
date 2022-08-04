// Creamos una clase para poder trabajar con el servidor de manera modular

const express = require('express');
const cors = require('cors'); 

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //Middleware
        this.midddlewares();

        //Lectura y parseo del body
        this.app.use(express.json());

        //Rutas de mi aplicacion
        this.routes();
    }

    midddlewares() {
        //CORS
        this.app.use(cors());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    //Definimos las rutas de navegacion que tendra la aplicacion
    routes() {
        this.app.use(this.usersPath, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });        
    }
}

module.exports = Server;