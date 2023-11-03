require('dotenv').config();

const express = require('express');
const usuarioRouter = require('./routers/UsuarioRouters.js');

const app = express();
const PORT = 3000;


/*app.get('/', (req, res) => {
  res.send('Hola Mundo!');
})*/

app.use(usuarioRouter);

app.listen(PORT, () => {
  console.log(`servidor iniciado en el puerto: ${PORT}`);
})