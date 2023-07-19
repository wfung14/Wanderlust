const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema(
  {
    location: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    transportation: {
      type: String
    },
    lodging: {
      type: String,
      required: true
    },
    activities: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Itinerary',
      required: false
    }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Location', locationSchema)