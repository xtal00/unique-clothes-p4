const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clothSchema = new Schema({
  name: {type: String},
  color: {type: String},
  category: {type: String},
  farbic: {type: String},
  price: {type: Number},
  size: {type: String},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
},
  {
  timestamps: true
  }
)

module.exports = mongoose.model("Cloth", clothSchema)