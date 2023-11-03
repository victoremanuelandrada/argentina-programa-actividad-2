const usuarioRouter = require('express').Router();
const { Router } = require('express');
const { 
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario
 } = require('./../controllers/UsuariosController.js');


//ver usuarios
usuarioRouter.get('/usuarios', verUsuarios);
//ver usuario
usuarioRouter.get('/usuario', verUsuario);
//crear usuario
usuarioRouter.post('/usuario', crearUsuario);
//editar usuario
usuarioRouter.put('/usuario', editarUsuario);
//eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario);


module.exports= usuarioRouter;