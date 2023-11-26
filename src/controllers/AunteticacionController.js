const jwt = require('jsonwebtoken');
const UsuarioModel = require('./../models/UsuariosModel.js');
const AutenticacionController = {}

const JWT_KEY=process.env.JWT_KEY;

//si queremos la borramos ya no es util
/*const usuaios = [
    {id: 1,usuario: 'Lord', contrasenia: '123456'},
    {id: 1,usuario: 'Lody', contrasenia: 'abvdef'}
];*/

AutenticacionController.autenticar = async (req, res)=>{
    try {
        const { usuario, contrasenia } = req.body;
        const usuarioEncontrado = await UsuarioModel.findOne({
             where: { usuario, contrasenia  } });
        if (!usuarioEncontrado) {
            return res.status(404).json({mensaje: 'El Usuario no fue encontrado'});
        }
        const datos ={
            id:usuarioEncontrado._id,
            usuario:usuarioEncontrado.usuario,
            nombres: usuarioEncontrado.nombres,
            apellidos:usuarioEncontrado.apellidos,

        }
        let token = jwt.sign(datos, JWT_KEY);
        re.json({ token: token, data: datos});
    
    } catch (error) {
        return res.status(500),json({mensaje:'se produjo en error interno'});
    }
    
   
}

AutenticacionController.registrar =(req, res)=>{
    //simular registro...
    
}
AutenticacionController.verificarToken =(req, res)=>{
    //simular registro...
    const token = req.body.token;
try
    {
        let desencriptado = jwt.verify(token, JWT_KEY);

        res.json({datos: desencriptado});
}catch (error) {
    res.status(500).json({
        mensaje:'se ha generado un error',
        error: error});
}
    
}
module.exports = AutenticacionController;