//
const EmailRouter = require('express').Router();

const{ 
    enviarEmail,} = require('./../controllers/EmailController.js');
EmailRouter.post('/enviarEmail', enviarEmail);

    module.exports = EmailRouter;