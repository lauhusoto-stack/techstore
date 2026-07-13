require("dotenv").config();

const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");

const app = express();

// Conectar a MongoDB
conectarDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
console.log("Cargando rutas de productos...");
app.use("/api/productos", require("./routes/productos"));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// Iniciar servidor
app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 5000");
});