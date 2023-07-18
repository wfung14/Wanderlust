const router = require('express').Router()
const controller = require('../controllers/locations')
const middleware = require('../middleware')

router.get('/', controller.GetLocations)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateLocation
)
router.put(
  '/:location_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateLocation
)
router.delete(
  '/:location_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteLocation
)

module.exports = router