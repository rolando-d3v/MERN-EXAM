const {Router} = require('express');
const router = Router()
const {getUsers, createUser} = require('../controllers/user.controller')

router.get('/user', getUsers)
// router.get('/preguntas/:id', getPregunta)
router.post('/user', createUser)
// router.put('/preguntas/:IdPregunta', updatePregunta)
// router.delete('/preguntas/:IdPregunta', removePregunta)

module.exports = router