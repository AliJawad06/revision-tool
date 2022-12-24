const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sectionSchema = new Schema({
  start: {
    type: String
  },
  end: {
    type: String
  },
  id:{
    type: Number
  },
  status:{
    type: String
  }
}, {
    collection: 'sections'
  })

module.exports = mongoose.model('Section', sectionSchema)