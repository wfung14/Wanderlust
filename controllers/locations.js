const Location = require('../models/location')

const GetLocations = async (req, res) => {
  try {
    const locations = await Location.find({})
    res.send(locations)
  } catch (error) {
    throw error
  }
}

const CreateLocation = async (req, res) => {
  try {
    const location = await Location.create({ ...req.body })
    res.send(location)
  } catch (error) {
    throw error
  }
}

const UpdateLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.location_id, req.body)
    res.send(location)
  } catch (error) {
    throw error
  }
}

const DeleteLocation = async (req, res) => {
  try {
    await Location.deleteOne({ _id: req.params.location_id })
    res.send({ msg: 'Location Deleted', payload: req.params.location_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetLocations,
  CreateLocation,
  UpdateLocation,
  DeleteLocation
}