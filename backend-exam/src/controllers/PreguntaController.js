const PreguntaModels = require("../models/PreguntaModels");

// pinta todas las prguntas
exports.getPreguntas = async (req, res, next) => {
  try {
    const pregunta = await PreguntaModels.find()
    res.json(pregunta)
  } catch (error) {
    res.send(error);
  }
};

// crea pregunta
exports.createPregunta = async (req, res, next) => {
  console.log(req.body);
  try {
    const pregunta = new PreguntaModels(req.body);
    res.json({ message: "pregunta create successfully" });
    await pregunta.save();
  } catch (err) {
    res.json({message: err});
    console.log(err);
    next();
  }
};

exports.getPregunta = async (req, res, next) => {
  try {
    const pregunta = await PreguntaModels.findById({
      _id: req.params.IdPregunta,
    });
    res.json(pregunta);
  } catch (error) {
    res.send(error);
    next();
  }
};

exports.updatePregunta = async (req, res, next) => {
  try {
    const pregunta = await PreguntaModels.findOneAndUpdate(
      { _id: req.params.IdPregunta},
      req.body,
      { new: true }
    );
    res.json({message: "pregunta update successfully"})
    await res.json(pregunta)
  } catch (error) {
    res.send(error);
    next();
  }
};

exports.removePregunta = async (req, res, next) => {
    try {
        const pregunta =  await PreguntaModels.findOneAndDelete({_id: req.params.IdPregunta})
        res.json({message: `pregunta ${pregunta.id} deleted successfully`})
    } catch (err) {
        console.log(err);
        next()
    }
}