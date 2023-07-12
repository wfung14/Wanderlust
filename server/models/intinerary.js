const { Schema } = require('mongoose')

const itinerarySchema = new Schema ({
  activity: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

module.exports = itinerarySchema