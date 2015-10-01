var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, maxlength: 80 },
  country: { type: String },
  degree: { type: String },
  birth_year: { type: Number }
});

module.exports = mongoose.model('Author', schema);
