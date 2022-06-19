const express = require('express')

const { vistaprincipal, vistaTablas, vistaNotificaciones } = require('../controllers/PageControllers')

const router = express.Router()

router.get('/', vistaprincipal)
router.get('/tables', vistaTablas)
router.get('/notifications', vistaNotificaciones)

module.exports = { routes: router }