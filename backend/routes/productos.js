const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Guardar un producto
router.post("/", async (req, res) => {
  try {
    const producto = new Product(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
});

module.exports = router;