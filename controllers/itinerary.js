const Location = require('../models/location');

const create = async (req, res) => {
  const location = await Location.findById(req.params.id);
  location.itinerary.push(req.body);
  try{
    await location.save();
  } catch (err) {
    res.redirect('/locations/${location._id}')
  }
}

const deleteItinerary = (req, res, next) => {
  Location.findOne({'itinerary._id': req.params.id, 'itinerary.user': req.user._id}).then(function(location) {
    if (!location) return res.redirect('/locations');
    location.itinerary.remove(req.params.id);
    location.save().then(function() {
      res.redirect(`/locations/${location._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}

const getItinerary = (req, res, next) => {
  try {
    const intinerarys = await ItineraryForm.findById(req.params.)
  }

  `locations/${data.id}/itineraries`
}

module.exports = {
  create,
  delete: deleteItinerary
}