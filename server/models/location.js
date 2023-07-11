const { Schema } = require('mongoose')
const noteSchema = require('./note')

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
  },
  notes: [noteSchema]
})

module.exports = locationSchema