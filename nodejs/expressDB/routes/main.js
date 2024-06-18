const express = require('express')
const router = express.Router();
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    },
  })
const upload = multer({ storage: storage })

const mainController = require('../controllers/mainController.js')




router.get('/api/planets', mainController.getAll)

router.get('/api/planets/:id', mainController.getPlanetById)

router.post('/api/planets/', mainController.create)

router.post('/api/planets/:id/image', upload.single('planetImage'), mainController.addImage)

router.put('/api/planets/:id', mainController.editPlanet)

router.delete('/api/planets/:id', mainController.destroyPlanet)


module.exports = router