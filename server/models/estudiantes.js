const mongoose = require('mongoose')
const Schema = mongoose.Schema

const estudianteSchema = {
    nombre : String,
    apellido: String,
    edad: Number,
    correo: String,
    direccion: String,
    telefono: Number
}

module.exports = mongoose.model('estudiantes', estudianteSchema)

