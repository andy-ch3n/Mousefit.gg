const mongoose = require('mongoose');

const mouseSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  mouseGrip: [],
  interface: {
    type: Array,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  price: {
    type: Number
  },
  amazonLink: {
    type: String
  },
  mouseSize: {
    type: String
  },
  imageURL: {
    type: String
  },
});

const Mouse = mongoose.model('Mouse', mouseSchema);

module.exports = Mouse;