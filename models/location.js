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
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Location', locationSchema)