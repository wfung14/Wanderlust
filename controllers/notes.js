const Location = require('../models/location');
const Note = require('../models/note')

// const create = async (req, res) => {
//   const location = await Location.findById(req.params.id);
//   location.notes.push(req.body);
//   try{
//     await location.save();
//   } catch (err) {
//     res.redirect('/locations/${location._id}')
//   }
// }

const create = async (req, res) => {
  try {
  const locationId = await Location.findById(req.params.id)
  let content = await new Note(req.body)
  content.save()
  let location = await Location.findById(locationId)
  location.notes.push(content._id)
  await Location.findByIdAndUpdate(locationId, location)
  return res.send({ content })
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
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

const getNote = async (req, res) => {
  console.log(req)
  try {
    const note = await Note.findById(req.params.id)
    res.send(note)
  } catch (error) {
    throw error
  }
}

module.exports = {
  create,
  delete: deleteNote,
  get: getNote
}