const { Schema } = require('mongoose')

const locationSchema = new Schema ({
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
})

module.exports = locationSchema