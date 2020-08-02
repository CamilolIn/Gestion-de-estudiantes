var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const estudiantes_routes = require('./routes/estudiantes') 

var app = express()

//Middleware JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//CORS
app.use(cors())

//Middleware Rutas
app.use('/api', estudiantes_routes)


//Exportar APP
module.exports = app