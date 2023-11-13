const { Sequelize } = require('sequelize');


const DB_NAME =process.env.DB_NAME;
const DB_USER =process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
    host: DB_HOST,
    dialect: 'mysql',

  });

  const database = async() =>{
    try {
      await sequelize.sync();

      console.log('Conexion con exito.');

    } catch (error) {
      console.error('Error:', error);
    
    }
  }

  module.exports = {database, sequelize};
  