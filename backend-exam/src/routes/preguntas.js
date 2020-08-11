const {Router} = require('express');
const router = Router()
const {getPreguntas, getPregunta, createPregunta, updatePregunta, removePregunta} = require('../controllers/PreguntaController')

router.get('/preguntas', getPreguntas)
router.get('/preguntas/:IdPregunta', getPregunta)
router.post('/preguntas', createPregunta)
router.put('/preguntas/:IdPregunta', updatePregunta)
router.delete('/preguntas/:IdPregunta', removePregunta)

module.exports = router