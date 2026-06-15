const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:  { type: String,  required: true },
  email: { type: String,  required: true, unique: true },
  age:   { type: Number },
  city:  { type: String,  default: 'Unknown' },
  active:{ type: Boolean, default: true }
}, { timestamps: true })  // adds createdAt + updatedAt

// 'User' → collection becomes 'users' in MongoDB
module.exports = mongoose.model('User', userSchema)