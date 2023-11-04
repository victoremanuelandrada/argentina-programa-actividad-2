require('dotenv').config();

const express = require('express');
const bodyParse = require('body-parser')
const usuarioRouter = require('./routers/UsuarioRouters.js');
const AutenticacionRoutes = require('./routers/autenticacionRoutes.js');

const app = express();
const PORT = 3000;


/*app.get('/', (req, res) => {
  res.send('Hola Mundo!');
})*/

app.use(bodyParse.json());
app.use(usuarioRouter);
app.use(AutenticacionRoutes);

app.listen(PORT, () => {
  console.log(`servidor iniciado en el puerto: ${PORT}`);
})