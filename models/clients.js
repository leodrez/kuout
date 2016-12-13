const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  userName: String,
  email: String,
  password : String,
  // following: [{type: Schema.Types.userId ref: 'users'}],
  // followers: [{type: Schema.Types.userId ref: 'users'}],
  kuouts: []
});

module.exports = mongoose.model('users', userSchema);
