const Location = require('../models/location')
const Note = require('../models/notes')
const Itinerary = require('../models/itinerary')

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

const showItinerary = async (req, res) => {
  const location = await Location.findById(req.params.id).populate('itineraries');
  const itineraries = await Itinerary.find({ _id: { $nin: location.itineraries } }).sort('name');
  res.render('locations/show', { title: 'Location Detail', location, itineraries });
}

const showNote = async (req, res) => {
  const location = await Location.findById(req.params.id).populate('notes');
  const notes = await Note.find({ _id: { $nin: location.notes } }).sort('name');
  res.render('locations/show', { title: 'Location Detail', location, notes });
}

module.exports = {
  new: newLocation,
  index,
  create,
  delete: deleteNote,
  showItinerary,
  showNote
};