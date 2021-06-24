const Employee = require("../models/employees.model");

let response = {
  msg: "",
  exito: false,
};

// Creando el método de insert

exports.create = (req, res) => {
  // Agregamos new model dónde vamos a meter nuestros valores de cada campo
  let employee = new Employee({
    name: req.body.nameb,
    lname: req.body.lnameb,
    phone: req.body.phoneb,
    mail: req.body.mailb,
    address: req.body.addressb,
  });

  // Añadiendo métodos que brinda mongoose
  // El método save recibe un callback, que es el que se ejecuta cuando se termine de ejecutar el método
  employee.save((err) => {
    // Cuando termine de enviar el registro, regresa una respuesta
    if (err) {
      console.error(err);
      (response.exito = false), (response.msg = "Error al guardar empleado");
      res.json(response);
      return;
    }
    (response.exito = true), (response.msg = "Empleado guardado correctamente");
    res.json(response);
  });
};

// Método find. El primer find es el nombre del método el cual puede cambiar y el segundo find es el método que ofrece el schema
exports.find = (req, res) => {
  Employee.find((err, employees) => {
    res.json(employees);
  });
};

// Método findone. Recibe un _id desde los parámetros (URL) cómo condición
exports.findOne = (req, res) => {
  Employee.findOne({ _id: req.params.id }, (err, employee) => {
    res.json(employee);
  });
};

// Update

exports.update = (req, res) => {
  let employee = {
    name: req.body.nameb,
    lname: req.body.lnameb,
    phone: req.body.phoneb,
    mail: req.body.mailb,
    address: req.body.addressb,
  };

  Employee.findByIdAndUpdate(req.params.id, { $set: employee }, (err) => {
    if (err) {
      console.error(err);
      (response.exito = false), (response.msg = "Error al actualizar empleado");
      res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "Empleado actualizado correctamente");
    res.json(response);
  });
};

// Remove
exports.remove = (req, res) => {
  Employee.findByIdAndRemove({ _id: req.params.id }, (err) => {
    if (err) {
      (response.exito = false), (response.msg = "Error al eliminar empleado");
      res.json(response);
      return;
    }
    response.exito = true;
    response.msg = "Empleado eliminado correctamente";
    res.json(response);
  });
};
