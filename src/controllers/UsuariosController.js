const UsuarioModel = require('./../models/UsuariosModel.js');

const UsuariosController = {}


//ver usuarios
UsuariosController.verUsuarios = async (req, res)=>{
    try {
        const lista_usuarios = await UsuarioModel.findAll();

        return res.json(lista_usuarios);
    } catch(error){
        return res.status(500).json({
            mensaje:'Ocurrio un error Interno',
             error: error}
        );

    }
}

//ver usuario
UsuariosController.verUsuario = (req, res)=>{
    //Fer un usuario en particular tarea
    return res.json({ mensaje: 'Ruta: ver usuario'});
}
//crear usuario
UsuariosController.crearUsuario =async (req, res)=>{
    try {
        const {nombres, apellidos}=req.body;

        const nuevo_usuarios = await UsuarioModel.create({
            nombres:nombres,
            apellidos:apellidos,
        })

       //await nuevo_usuarios.save();
        if (nuevo_usuarios) {
            return res.json({mensaje: 'Usuario creado corectamente.'});
        } else {
            return res.status(500).json({error: 'Usuario no se creo corectamente.'});
        }  

    }
    catch(error){
        return res.status(500).json({
            mensaje:'Ocurrio un error Interno',
             error: error}
        );
    }
}

//editar usuario
UsuariosController.editarUsuario = (req, res)=>{
    return res.json({ mensaje: 'Ruta: crear usuario'});
}

//eliminar usuario
UsuariosController.eliminarUsuario = async (req, res)=>{
    
    try {
        const { id } =req.body;
       const eliminado = await UsuarioModel.destroy({
            where: {
                id: id,
            },
        });
        
        if (eliminado) {
            return res.json({mensaje: 'Usuario Eliminado Correnctamente.'});
        } else{
            return res.status(500).json({
                mensaje:'No se pudo Elimanar el Usuario.'
            });
        }
    } catch(error){
        return res.status(500).json({
            mensaje:'Ocurrio un error Interno',
             error: error}
        );

    }
}

module.exports = UsuariosController;