const autenticacionRouter = require('express').Router();
const {
    autenticar,
    registrar,
    verificarToken
} = require('./../controllers/AunteticacionController.js');

autenticacionRouter.post('/autenticar', autenticar);
autenticacionRouter.post('/verificartoken', verificarToken);

module.exports= autenticacionRouter;
