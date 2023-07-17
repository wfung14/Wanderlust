const Location = require('../models/location');

const create = async (req, res) => {
  const location = await Location.findById(req.params.id);
  location.notes.push(req.body);
  try{
    await location.save();
  } catch (err) {
    res.redirect('/locations/${location._id}')
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
  create,
  delete: deleteNote
}