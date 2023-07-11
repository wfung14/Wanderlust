const { Schema } = require('mongoose')

const noteSchema = new Schema ({
  content: {
    type: String
  }
})

module.exports = noteSchema