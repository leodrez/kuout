const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
  image: String,
  kuout: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', postSchema);
