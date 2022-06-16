const {Router} = require('express');
const router = Router()
const {authUser} = require('../controllers/auth.controller')

// router.get('/auth', getUsers)
// router.get('/preguntas/:id', getPregunta)
router.post('/auth', authUser)
// router.put('/preguntas/:IdPregunta', updatePregunta)
// router.delete('/preguntas/:IdPregunta', removePregunta)

module.exports = router