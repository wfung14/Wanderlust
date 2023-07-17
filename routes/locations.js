const router = require('express').Router()
const controller = require('../controllers/locations')
const middleware = require('../middleware')

router.get('/', controller.GetPosts)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateLocation
)
router.put(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateLocation
)
router.delete(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteLocation
)

module.exports = router