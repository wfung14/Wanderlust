const express = require('express');
const router = express.Router();
const locationsCtrl = require('../controllers/locations')

// create controller module
const locationsCtrl = require('../controllers/locations')

// GET /locations/new
router.get('/new', locationsCtrl.new);

// POST /locations
router.post('/', locationsCtrl.create);

// GET route for /locations
router.get('/', locationsCtrl.index);

// DELETE /comments
router.delete('/locations/:id', locationsCtrl.delete);

module.exports = router;

