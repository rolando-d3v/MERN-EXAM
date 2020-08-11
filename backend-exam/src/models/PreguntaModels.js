const {Schema, model} = require('mongoose');
const PreguntaSchema = new Schema({
    id: {
        type:String,
        required: true,
        unique: true,
    },
    pregunta: {
        type: String
    },
    pre2: {
        type: String
    },
    respuesta_a: {
        type:String
    },
    respuesta_b: {
        type:String
    },
    respuesta_c: {
        type:String
    },
    respuesta_d: {
        type:String
    },
    respuesta_e: {
        type:String
    },
    respuesta_correcta: {
        type:String
    },
})

module.exports = model('preguntas', PreguntaSchema )