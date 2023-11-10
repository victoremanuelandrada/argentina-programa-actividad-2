const UsuarioModel = require('./../models/UsuariosModel.js');

const UsuariosController = {}


//ver usuarios
UsuariosController.verUsuarios = async (req, res)=>{
    try {
        const lista_usuarios = await UsuarioModel.findAll();

        return res.json(lista_usuarios);
    } catch(error){
        return res.status(500).json({mensaje:'Ocurrio un error Interno', error: error});

    }
}
//ver usuario
UsuariosController.verUsuario = (req, res)=>{
    //Fer un usuario en particular tarea
    return res.json({ mensaje: 'Ruta: ver usuario'});
}
//crear usuario
UsuariosController.crearUsuario = (req, res)=>{
    return res.json({ mensaje: 'Ruta: crear usuario'});
}

//editar usuario
UsuariosController.editarUsuario = (req, res)=>{
    return res.json({ mensaje: 'Ruta: crear usuario'});
}

//eliminar usuario
UsuariosController.eliminarUsuario = (req, res)=>{
    return res.json({ mensaje: 'Ruta: crear usuario'});
}

module.exports = UsuariosController;