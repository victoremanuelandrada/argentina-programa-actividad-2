const UsuarioModel = require('./../../models/mongoose/UsuarioModel.js');
const UsurioController = {}

//ver usuarios
UsurioController.verUsuarios = async (req, res)=>{
    try {
        const lista_usuarios = await  UsuarioModel.find();

        return res.json(lista_usuarios);
    } catch(error){
        console.log(error)
        return res.status(500).json({
            mensaje:'Ocurrio un error Interno',
             error: error}
        );

    }
}

//ver usuario
UsurioController.verUsuario = async (req, res)=>{
    try {
        
        const {id}= req.params;

        const usuaioEncontrado = await  UsuarioModel.findById(id);
        
        return res.json(usuaioEncontrado);
    } catch(error){
        let  mensaje='Ocurrio un error Interno al intentar obtener el usuario';
        if(error.kind ==="ObjectId"){
            mensaje = 'no se pudo obtener un mesaje'
        }
        return res.status(500).json({
            mensaje:'Ocurrio un error Interno',
             error: error}
        );

    }
}
//crear usuario
UsurioController.crearUsuario = async (req, res)=>{
    try{
        const {usuario, contrasenia, nombres, apellidos}= req.body;
        const muevoUsuario = new UsuarioModel({
            usuario: usuario,
            contrasenia:contrasenia,
            nombres: nombres,
            apellidos: apellidos,
            });

            await muevoUsuario.save();
        return res.json({ mensaje: 'usuario creado con exito'});
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrio un error Interno al intentar crear el usuario',
             error: error}
        );
    }
   
   
}

//editar usuario
UsurioController.editarUsuario = async (req, res)=>{
    try{
        const {id,usuario, contrasenia, nombres, apellidos}= req.body;
        
        await UsuarioModel.findByIdAndUpdate(
            
                id,
                 {
                    usuario: usuario,
                    contrasenia:contrasenia,
                    nombres: nombres,
                    apellidos: apellidos
                 });
            
        return res.json({ mensaje: ' usuario actualizado con exito'});
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrio un error Interno al intentar editar el usuario',
             error: error
            });
    }
}

//eliminar usuario
UsurioController.eliminarUsuario = async (req, res)=>{
    try{
        const {id}= req.body;
        
        await UsuarioModel.findByIdAndDelete(id);
            
        return res.json({ mensaje: ' usuario Eliminado con exito'});
    } catch (error){
        return res.status(500).json({
            mensaje:'Ocurrio un error Interno al intentar eliminar el usuario',
             error: error
            });
    }
    
}


module.exports = UsurioController;