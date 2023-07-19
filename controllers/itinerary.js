const Location = require('../models/location')
const Itinerary = require('../models/itinerary')

const create = async (req, res) => {
  try {
  const locationId = await Location.findById(req.params.id)
  let activity = await new Itinerary(req.body)
  activity.save()
  let location = await Location.findById(locationId)
  location.activities.push(activity._id)
  await Location.findByIdAndUpdate(locationId, location)
  return res.send({ activity })
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}

const deleteItinerary = (req, res, next) => {
  Location.findOne({
    'itinerary._id': req.params.id,
    'itinerary.user': req.user._id
  }).then(function (location) {
    if (!location) return res.redirect('/locations')
    location.itinerary.remove(req.params.id)
    location
      .save()
      .then(function () {
        res.redirect(`/locations/${location._id}`)
      })
      .catch(function (err) {
        return next(err)
      })
  })
}

const getItinerary = async (req, res) => {
  console.log(req)
  try {
    const itinerary = await Itinerary.findById(req.params.id)
    console.log(itinerary)
    res.send(itinerary)
  } catch (error) {
    throw error
  }
}

module.exports = {
  create,
  delete: deleteItinerary,
  get: getItinerary
}
