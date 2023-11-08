require('dotenv').config();

const express = require('express');
const bodyParse = require('body-parser');
const fileUpload = require('express-fileupload');

const usuarioRouter = require('./routers/UsuarioRouters.js');
const AutenticacionRoutes = require('./routers/autenticacionRoutes.js');
const ArchivosRouter = require('./routers/ArchivosRouter.js');

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

app.listen(PORT, () => {
  console.log(`servidor iniciado en el puerto: ${PORT}`);
})