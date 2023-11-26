//const mongoose = require('mongoose');

const {Schema, model} = require('mongoose');
//const ObjectId = Schema.ObjectId;

const UsuarioShema = new Schema({
  usuario: String,
  contrasenia:String,
  nombres: String,
  apellidos: String,
}); 

const UsuarioModel = model('usuario', UsuarioShema);
module.exports = UsuarioModel; 