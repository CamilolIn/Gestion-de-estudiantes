const mongoose = require('mongoose')
const colors = require('colors')
const app = require('./app')
const port = 3700


// Conexion a Mongo
mongoose.connect('mongodb://localhost:27017/eduBIT')

// Validar la conexion a la BD
const db = mongoose.connection
db.on('error', console.error.bind(console, 'conection error'))
db.once('open', function(){
    console.log('Conexion establecida con exito de Mongo'.green)

    app.listen(port, function(){
        console.log("Conexion a sevidor establecidad".yellow)
    })
})