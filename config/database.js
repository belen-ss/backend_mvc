const mongoose = require ('mongoose');

const db = 'mongodb+srv://admin:admin@cluster0.vqkai.mongodb.net/backend_db?retryWrites=true&w=majority';

// Función para hacer la conexión

exports.mongoConnect = () => {
  const mongoStringCollection = db;
  mongoose.connect(mongoStringCollection);
  mongoose.Promise = global.Promise;

  // Recibiendo la conexión

  const dbConnection = mongoose.connection;
  dbConnection.on('error', console.error.bind(console, 'mongodb connection error'));
}