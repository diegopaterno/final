const express = require('express')
const routerCarrito = express.Router()

const controller = require('../controller/carrito')
const { feedBack }= require('../controller/pago')
//const controllerP= require('../controller/pago')

/* POST - request para agregar un producto al carrito */
routerCarrito.post('/', controller.guardarCarrito)

routerCarrito.get('feedback', feedBack)
//routerCarrito.get('feedback', controllerP.feedBack)

module.exports = routerCarrito