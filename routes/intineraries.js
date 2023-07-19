const express = require('express');
const router = express.Router();
const itinerariesCtrl = require('../controllers/itinerary')

// POST /itineraries/:id/itineraries
router.post('/location/:id/itineraries', itinerariesCtrl.create);
// DELETE /itineraries
router.delete('/itineraries/:id', itinerariesCtrl.delete);

router.get('/itineraries/location/:id', itinerariesCtrl.get)

module.exports = router;