const PreguntaModels = require("../models/PreguntaModels");
const {v4: uuidv4} = require('uuid');

// pinta todas las prguntas
exports.getPreguntas = async (req, res) => {
  try {
    const pregunta = await PreguntaModels.find();
    res.json(pregunta);
  } catch (error) {
    res.status(500).json(error);
  }
};

// crea pregunta
exports.createPregunta = async (req, res) => {
  try {
    const pregunta = new PreguntaModels({
      id: req.body.id,
      idx: uuidv4(),
      pregunta: req.body.pregunta,
      pre2: req.body.pre2,
      respuesta_a: req.body.respuesta_a,
      respuesta_b: req.body.respuesta_b,
      respuesta_c: req.body.respuesta_c,
      respuesta_d: req.body.respuesta_d,
      respuesta_e: req.body.respuesta_e,
      respuesta_correcta: req.body.respuesta_correcta,
      tema: req.body.tema,
    });
    
    res.json({ message: "pregunta create successfully" });
    console.log(pregunta);
    await pregunta.save();
  } catch (err) {
    res.json({ message: "error server", err });
    console.log(err);
  }
};

exports.getPregunta = async (req, res) => {
  try {
    const pregunta = await PreguntaModels.findById({
      _id: req.params.IdPregunta,
    });
    res.json(pregunta);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updatePregunta = async (req, res) => {
  try {
    const pregunta = await PreguntaModels.findOneAndUpdate(
      { _id: req.params.IdPregunta },
      req.body,
      { new: true }
    );
    res.json({ message: "pregunta update successfully", pregunta });
  } catch (error) {
    res.send(error);
  }
};

exports.removePregunta = async (req, res) => {
  try {
    const pregunta = await PreguntaModels.findOneAndDelete({
      _id: req.params.IdPregunta,
    });
    res.json({ message: `pregunta ${pregunta.id} deleted successfully` });
  } catch (err) {
    console.log(err);
  }
};
