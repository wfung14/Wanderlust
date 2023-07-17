const express = require('express');
const router = express.Router();
const itinerariesCtrl = require('../controllers/itineraries')

// POST /itineraries/:id/itineraries
router.post('/location/:id/itineraries', itinerariesCtrl.create);
// DELETE /itineraries
router.delete('/itineraries/:id', itinerariesCtrl.delete);

module.exports = router;