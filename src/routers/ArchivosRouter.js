const ArchivosRouter = require('express').Router();

const { 
    subirArchivo,
 } = require('./../controllers/ArchivosController.js');

 ArchivosRouter.post('/subirArchivo', subirArchivo);

module.exports = ArchivosRouter;