const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
// Creando el schema 
const EmployeesSchema = new Schema({ 
  name: {type: String, required: true, max: 60}, 
  lname: {type: String, required: true, max: 40}, 
  phone: {type: String, required: true, max: 15}, 
  mail: {type: String, required: false, max: 70}, 
  address: {type: String, required: false, max: 150}, 
});

module.exports = mongoose.model('employees', EmployeesSchema);