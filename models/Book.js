var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  title: { type: String, maxlength: 120, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  genre: {
    type: String,
    lowercase: true,
    enum: [ 'unknown', 'how-to', 'biography' ]
  },
  pages: { type: Number, min: 1 },
  checked_out: { type: Boolean, default: false }
});

module.exports = mongoose.model('Book', schema);
