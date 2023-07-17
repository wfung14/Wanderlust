const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itinerarySchema = new Schema(
  {
    activity: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Itinerary', itinerarySchema)