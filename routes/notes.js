const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes')

// POST /notes/:id/notes
router.post('/location/:id/notes', notesCtrl.create);
// DELETE /notes
router.delete('/notes/:id', notesCtrl.delete);

router.get('/notes/location/:id', notesCtrl.get)

module.exports = router;