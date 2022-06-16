const { Schema, model } = require("mongoose");
const PreguntaSchema = new Schema({
  idx: {
    type: String,
    required: true,
  },
  GRADO: {
    type: String,
  },
  nombre: {
    type: String,
  },
  candidato: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
});

module.exports = model("user", PreguntaSchema);
