let UsuariosController = {}

const lista_usuarios = [
    {nombre: 'Emanuel'},
    {nombre: 'Victor'}
];


//ver usuarios
UsuariosController.verUsuarios = (req, res)=>{
    return res.json(lista_usuarios);
}
//ver usuario
UsuariosController.verUsuario = (req, res)=>{
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