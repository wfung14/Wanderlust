const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes')

// POST /notes/:id/notes
router.post('/location/:id/notes', notesCtrl.create);
// DELETE /notes
router.delete('/notes/:id', notesCtrl.delete);

module.exports = router;