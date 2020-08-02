const Estudiante = require('../models/estudiantes');
const router = require('../routes/estudiantes');

const controllers = {

    //GUARDAR UN ESTUDIANTE
    saveStudent: function(req, res){
        var estudiante = new Estudiante();
        
        var params = req.body
        console.log(params)
        estudiante.nombre = params.nombre;
        estudiante.apellido = params.apellido;
        estudiante.edad = params.edad;
        estudiante.correo = params.correo;
        estudiante.direccion = params.direccion;
        estudiante.telefono = params.telefono;

        estudiante.save((err, studentStore)=>{
            if (err) return res.status(500).send({message: "Error al Guardar"})
            if (!studentStore) return res.status(404).send({message: "Dato no guardado"})
            return res.status(200).send({estudiante:studentStore})
        })

    },

    //BUSCAR UN ESTUDIANTE
    getStudent: function(req, res){
       var studentId = req.params.id; 

       //res.send("Este es el ID: " + studentId)
       Estudiante.findById(studentId, function(err, studnt){
            if(err) return res.status(500).send({message: "Error Al buscar"})
            if(!studnt) return res.status(400).send({message: "No exite el estudiante"})
            console.log(studnt)
            return res.status(200).send({
                studentFind: studnt
            })
       })

    },

    //LISTAR TODOS LOS ESTUDIANTES
    getAllStudent: function(req, res){
        Estudiante.find({}).sort('-edad').exec(function(err, students){
            if (err) return res.status(500).send({message:"Error al buscar"})
            if(!students) return res.status(404).send({message:"No existen datos"})
            console.log(students)
            return res.status(200).send({
                allStudent: students
            })
        })
    },

    //ACTUALIZAR
    updateStudent: function(req, res){
        var studentId = req.params.id;
        var update = req.body

        Estudiante.findByIdAndUpdate(studentId, update, {new:true}, function(err, studentUpdate){
            if (err) return res.status(500).send({message:"Error al actualizar"})
            if (!studentUpdate) return res.status(404).send({message:"Estudiante no existe"})

            return res.status(200).send({
                studentUpdate: studentUpdate
            })
        })
    },

    removestudent: function(req, res){
        var studentId = req.params.id

        Estudiante.findByIdAndRemove(studentId, function(err, studentRemove){
            if (err) return res.status(500).send({message:"Error al Borrar"})
            if (!studentRemove) return res.status(404).send({message:"Estudiante no existe"}) 
            
            
            return res.status(200).send({
                studenR: studentRemove
            })
        })
    }



}

module.exports =  controllers

