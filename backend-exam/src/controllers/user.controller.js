const UserModel = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

// pinta todas las prguntas
exports.getUsers = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// crea pregunta
exports.createUser = async (req, res) => {
  try {
    const user = new UserModel({
      idx: uuidv4(),
      GRADO: req.body.GRADO,
      nombre: req.body.nombre,
      candidato: req.body.candidato,
      email: req.body.email,
      password: req.body.password,
    });

    res.json({ msn: "User create successfully" });
    console.log(user);
    await user.save();
  } catch (err) {
    res.json({ msn: "error server", err });
    console.log(err);
  }
};

// exports.getPregunta = async (req, res) => {
//   try {
//     const pregunta = await PreguntaModels.findById({
//       _id: req.params.id,
//     });
//     res.json(pregunta);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// exports.updatePregunta = async (req, res) => {
//   try {
//     const pregunta = await PreguntaModels.findOneAndUpdate(
//       { _id: req.params.IdPregunta },
//       req.body,
//       { new: true }
//     );
//     res.json({ message: "pregunta update successfully", pregunta });
//   } catch (error) {
//     res.send(error);
//   }
// };

// exports.removePregunta = async (req, res) => {
//   try {
//     const pregunta = await PreguntaModels.findOneAndDelete({
//       _id: req.params.IdPregunta,
//     });
//     res.json({ message: `pregunta ${pregunta.id} deleted successfully` });
//   } catch (err) {
//     console.log(err);
//   }
// };
