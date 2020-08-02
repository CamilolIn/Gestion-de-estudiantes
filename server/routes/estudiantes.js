const express = require('express')
const estuantesController = require('../controllers/estudiantes');
const app = require('../app');

const router = express.Router();

//RUTAS
router.post('/save-student', estuantesController.saveStudent)
router.get('/studentId/:id', estuantesController.getStudent)
router.get('/studentsAll', estuantesController.getAllStudent)
router.put('/studentupdate/:id', estuantesController.updateStudent)
router.delete('/studentremove/:id', estuantesController.removestudent)

module.exports = router



