const ArchivosController = {};

const rutaPrincipal = __dirname + '/../../tmp/';

ArchivosController.subirArchivo = (req, res)=>{
    try {
        const archivo = req.files.foo;
        const rutaGuardar = rutaPrincipal + archivo.name;

        return archivo.mv(rutaGuardar, function(err) {
            if (err){
            return res.status(500).json({error: err});
            } else{
            return res.json({mensaje: 'El Archivo se subio correctamente.'});
            }
        });
    } catch (err) {
        return res.status(500).json({error: 'ocurrio un error al intentar subir un archivo.'});
    }
    

    
}

module.exports = ArchivosController;