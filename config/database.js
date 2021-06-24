const mongoose = require ('mongoose');
const { MONGO_URI } = require('../.env');

const db = MONGO_URI;

// Función para hacer la conexión

exports.mongoConnect = () => {
  const mongoStringCollection = db;
  mongoose.connect(mongoStringCollection);
  mongoose.Promise = global.Promise;

  // Recibiendo la conexión

  const dbConnection = mongoose.connection;
  dbConnection.on('error', console.error.bind(console, 'mongodb connection error'));
}