//const mongoose = require('mongoose');

const {Schema, model} = require('mongoose');
//const ObjectId = Schema.ObjectId;

const UsuarioShema = new Schema({
  nombres: String,
  apellidos: String,
}); 

const UsuarioModel = model('usuario', UsuarioShema);
module.exports = UsuarioModel; 