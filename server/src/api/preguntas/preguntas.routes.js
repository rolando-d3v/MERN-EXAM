import { Router } from "express";
import * as preguntaCtrl from "./preguntasController";

const router = Router();

router.post("/", preguntaCtrl.createPregunta);
router.get("/", preguntaCtrl.getPreguntas);
router.get("/:id", preguntaCtrl.getPreguntaId);
router.put("/:id", preguntaCtrl.updatePregunta);
router.delete("/:id", preguntaCtrl.deletePregunta);

export default router;
