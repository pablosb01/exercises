const express = require('express')
const router = express.Router();


const mainController = require('../controllers/mainController.js')




router.get('/api/planets', mainController.getAll)

router.get('/api/planets/:id', mainController.getPlanetById)

router.post('/api/planets/', mainController.create)

router.put('/api/planets/:id', mainController.editPlanet)

router.delete('/api/planets/:id', mainController.destroyPlanet)


module.exports = router