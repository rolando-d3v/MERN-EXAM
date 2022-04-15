// const { v4: uuidv4 } = require("uuid");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//==============================
//CREATED PRODUCTO
//==============================
export const createPregunta = async (req, res) => {
  try {
    await prisma.preguntas_SO2_SO1_INTG.create({
      data: {
        id: req.body.id,
        pregunta: req.body.pregunta,
        pre2: req.body.pre2,
        respuesta_a: req.body.respuesta_a,
        respuesta_b: req.body.respuesta_b,
        respuesta_c: req.body.respuesta_c,
        respuesta_d: req.body.respuesta_d,
        respuesta_e: req.body.respuesta_e,
        respuesta_correcta: req.body.respuesta_correcta,
        tema: req.body.tema,
      },
    });

    return res.json({ msn: "Registro created success 😃 ✔️" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};

//==============================
//GET PRODUCTOS CON PAGINATE
//==============================
export const getPreguntas = async (req, res) => {
  try {
    const pro = await prisma.preguntas_SO2_SO1_INTG.findMany({});

    // const user = await prisma.user.findMany({
    //   select: {
    //     email: true,
    //     name: true,
    //   },
    // });

    return res.json(pro);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
  }
};





//==============================
//GET ONE PRODUCTO
//==============================
export const getPreguntaId = async (req, res) => {
  try {
    const producto = await  prisma.preguntas_SO2_SO1_INTG.findUnique({
      idx: req.params.id,
    });

    !producto
      ? res.send({ message: "el id no existe" })
      : res.status(200).json({ ok: true, producto });
  } catch (err) {
    console.log(err);
  }
};


//==============================
//UPDATE ONE PRODUCTO
//==============================
export const updatePregunta = async (req, res) => {
  try {
    const pregunta = await prisma.preguntas_SO2_SO1_INTG.update (
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({ message: "pregunta update successfully", pregunta });
  } catch (err) {
    console.log(err);
  }
};

//==============================
//DELETE ONE PRODUCTO
//==============================
export const deletePregunta = async (req, res) => {
  try {
    const pregunta = await PreguntaModels.findOneAndDelete({
      _id: req.params.id,
    });
    res.json({ message: `pregunta ${pregunta.id} deleted successfully` });
  } catch (err) {
    console.log(err);
  }
};
