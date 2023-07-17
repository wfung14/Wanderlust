const Location = require('../models/location')
const Note = require('../models/notes')
const Itinerary = require('../models/intinerary')

const newLocation = (req, res) => {
  res.render('locations/new', { title: 'Add Location', errorMsg: ''});
}

const index = async (req, res) => {
  const locations = await Location.find({});
  res.render('locations/index', { title: 'All Locationss', locations });
}

const create = async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.redirect(`/locations/${location._id}`);
  } catch (err) {
    res.render('locations/new', { errorMsg: err.message });
  }
}

const deleteNote = (req, res, next) => {
  Location.findOne({'notes._id': req.params.id, 'notes.user': req.user._id}).then(function(location) {
    if (!location) return res.redirect('/locations');
    location.notes.remove(req.params.id);
    location.save().then(function() {
      res.redirect(`/locations/${location._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}

module.exports = {
  new: newLocation,
  index,
  create,
  delete: deleteNote
};