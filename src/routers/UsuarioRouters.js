const usuarioRouter = require('express').Router();
const { Router } = require('express');

/*const { 
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario
 } = require('./../controllers/UsuariosController.js');*/

const {
    verUsuarios,
    verUsuario, 
    crearUsuario, 
    editarUsuario, 
    eliminarUsuario,
}= require('./../controllers/mongoose/UsuariosController.js');
/*#####################Sequelize##############################
//ver usuarios
usuarioRouter.get('/usuarios', verUsuarios);
//ver usuario
usuarioRouter.get('/usuario/:id', verUsuario);
//crear usuario
usuarioRouter.post('/usuario', crearUsuario);
//editar usuario
usuarioRouter.put('/usuario', editarUsuario);
//eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario);*/


/*#####################Mongose##############################*/
// ver usuarios verUsuarioMongoose)
usuarioRouter.get('/usuarios', verUsuarios);
//ver usuario
usuarioRouter.get('/usuario/:id', verUsuario);
//crear usuario
usuarioRouter.post('/usuario', crearUsuario);
//editar usuario
usuarioRouter.put('/usuario', editarUsuario);
//eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario);


module.exports= usuarioRouter;