const {  DataTypes } = require('sequelize');
const {sequelize} = require('./../config/sequelizeConfig.js');

const UsuariosModel = sequelize.define('Usuario', {
    // Model attributes are defined here
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = UsuariosModel;