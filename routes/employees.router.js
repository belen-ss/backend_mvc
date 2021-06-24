const express = require('express');
const router = express.Router();

// Importamos controlador para tener acceso a los métodos que definimos ahí
const employeesController = require('../controllers/employees.controller');

// Crear empleado
router.post('/', employeesController.create);

// Leer empleados
router.get('/', employeesController.find);

// Buscar un solo empleado
router.get('/:id', employeesController.findOne);

// Actualizar un empleado por id
router.put('/:id', employeesController.update);

// Eliminar empleado
router.delete('/:id', employeesController.remove);

module.exports = router;