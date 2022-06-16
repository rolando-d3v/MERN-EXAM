const UserModel = require("../models/user.model");

// pinta todas las prguntas
// exports.getUsers = async (req, res) => {
//   try {
//     const user = await UserModel.find();
//     res.json(user);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// crea pregunta
exports.authUser = async (req, res) => {
  try {
    if (!(req.body.email && req.body.password)) {
      return res.json({ msn: "Datos not Fount" });
    }

    const emailExite = await UserModel.findOne({ email: req.body.email });
    if (!emailExite) return res.json({ msn: "User not Fount" });

    const PassExite = await UserModel.findOne({ password: req.body.password });
    if (!PassExite) return res.json({ msn: "Password not Fount" });

    res.json({ msn: "Login successfully", dato: PassExite });
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
