const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    dates: {
      type: Date,
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