require('dotenv').config();

const express = require('express');
const bodyParse = require('body-parser');
const fileUpload = require('express-fileupload');

const {database} = require('./config/sequelizeConfig.js');

const usuarioRouter = require('./routers/UsuarioRouters.js');
const AutenticacionRoutes = require('./routers/autenticacionRoutes.js');
const ArchivosRouter = require('./routers/ArchivosRouter.js');
const georefRouter= require('./routers/georefRouter.js');
const EmailRouter = require('./routers/emailRouter.js');

const app = express();
const PORT = 3000;


/*app.get('/', (req, res) => {
  res.send('Hola Mundo!');
})*/
//MiddleWare
app.use(bodyParse.json());
app.use(fileUpload());

//Rutas
app.use(usuarioRouter);
app.use(AutenticacionRoutes);
app.use(ArchivosRouter);
app.use(georefRouter);
app.use(EmailRouter); 

app.listen(PORT, () => {
  console.log(`servidor iniciado en el puerto: ${PORT}`);
  database();
})