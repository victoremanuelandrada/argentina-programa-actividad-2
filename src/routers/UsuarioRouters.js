const usuarioRouter = require('express').Router();
const { Router } = require('express');
const { 
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario
 } = require('./../controllers/UsuariosController.js');
const {
    verUsuarios: verUsuariosMongoose,
    crearUsuario: crearUsuarioMongooe,
    editarUsuario:editarUsuarioMongoose,
    eliminarUsuario:eliminarUsuarioMongoose,
    verUsuario: verUsuarioMongoose,
}= require('./../controllers/mongoose/UsuariosController.js');
/*#####################Sequelize##############################*/
//ver usuarios
usuarioRouter.get('/usuarios', verUsuarios);
//ver usuario
usuarioRouter.get('/usuario/:id', verUsuario);
//crear usuario
usuarioRouter.post('/usuario', crearUsuario);
//editar usuario
usuarioRouter.put('/usuario', editarUsuario);
//eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario);


/*#####################Mongose##############################*/
// ver usuarios verUsuarioMongoose)
usuarioRouter.get('/m/usuarios', verUsuariosMongoose);
//crear usuario
usuarioRouter.post('/m/usuario', crearUsuarioMongooe);
//editar usuario
usuarioRouter.put('/m/usuario', editarUsuarioMongoose);
//eliminar usuario
usuarioRouter.delete('/m/usuario', eliminarUsuarioMongoose);
//ver usuario
usuarioRouter.get('/m/usuario/:id', verUsuarioMongoose);

module.exports= usuarioRouter;