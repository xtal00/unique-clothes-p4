const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  name: {type: String},
  totalPrice: {type: Number},
  date: {type: Date},
  deliveryStatus: {type: Boolean},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
},
  {
  timestamps: true
  }
)

module.exports = mongoose.model("order", orderSchema)