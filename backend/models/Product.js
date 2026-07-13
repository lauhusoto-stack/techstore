const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  valoracion: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);