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
UsuariosController.verUsuario = async(req, res)=>{
    
    try {
        
        const { id }= req.params;

        const usuaioEncontrado = await  UsuarioModel.findById(id);
        if (usuaioEncontrado) {
            return res.json(usuaioEncontrado);
        }else{
            return res.status(500).json({
                error: 'Usuario no Encontrado.'
            });
        }
        
    } catch(error){
            return res.status(500).json({
                mensaje:'Ocurrio un error Interno',
                error: error}
            );
        }
       

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
UsuariosController.editarUsuario = async (req, res)=>{
    try {
        const {id, nombres, apellidos}=req.body;

        if (!nombres || !apellidos) {
            return res.status(500).json({
                error: 'Falta Campos.'
            });
        }

        const Editarusuarios = await UsuarioModel.update({
            nombres:nombres,
            apellidos:apellidos,
        },{
            where: {
                id:id,
            }
        })

       //await nuevo_usuarios.save();
        if (Editarusuarios) {
            return res.json({mensaje: 'Usuario editar corectamente.'});
        } else {
            return res.status(500).json({error: 'Usuario no si pudo actualizar corectamente.'});
        }  

    }
    catch(error){
        return res.status(500).json({
            mensaje:'Ocurrio un error Interno',
             error: error}
        );
    }
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