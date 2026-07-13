require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

const productos = [
  {
    nombre: "Notebook Gamer ASUS ROG",
    precio: "$1.299.990",
    imagen: "Notebook Gamer ASUS ROG.png",
    valoracion: "★★★★★"
  },
  {
    nombre: "Mouse Gamer Logitech G502",
    precio: "$49.990",
    imagen: "Mouse Gamer Logitech G502.png",
    valoracion: "★★★★★"
  },
  {
    nombre: "Monitor Samsung 27 Pulgadas",
    precio: "$249.990",
    imagen: "Monitor Samsung.png",
    valoracion: "★★★★☆"
  },
  {
    nombre: "SSD Kingston 1TB",
    precio: "$89.990",
    imagen: "SSD Kingston.png",
    valoracion: "★★★★★"
  },
  {
    nombre: "Memoria RAM Corsair 16GB",
    precio: "$64.990",
    imagen: "Memoria RAM Corsair 16GB.png",
    valoracion: "★★★★☆"
  },
  {
    nombre: "Teclado Mecánico Redragon",
    precio: "$59.990",
    imagen: "Teclado Mecánico Redragon.png",
    valoracion: "★★★★★"
  },
  {
    nombre: "Audífonos Gamer HyperX",
    precio: "$79.990",
    imagen: "Audífonos Gamer HyperX.png",
    valoracion: "★★★★☆"
  },
  {
    nombre: "Cámara Web Logitech C920",
    precio: "$69.990",
    imagen: "Cámara Web Logitech C920.png",
    valoracion: "★★★☆☆"
  },
  {
    nombre: "Impresora Epson EcoTank L3250",
    precio: "$199.990",
    imagen: "Impresora Epson EcoTank L3250.png",
    valoracion: "★★★★★"
  },
  {
    nombre: "Tablet Lenovo Tab M10",
    precio: "$189.990",
    imagen: "Tablet Lenovo Tab M10.png",
    valoracion: "★★★★☆"
  },
  {
    nombre: "Disco Duro Externo Seagate 2TB",
    precio: "$99.990",
    imagen: "Disco Duro Externo Seagate 2TB.png",
    valoracion: "★★★★☆"
  },
  {
    nombre: "Parlante Bluetooth JBL Flip 6",
    precio: "$119.990",
    imagen: "Parlante Bluetooth JBL Flip 6.png",
    valoracion: "★★★★★"
  },
  {
    nombre: "Router TP-Link WiFi 6",
    precio: "$74.990",
    imagen: "Router TP-Link WiFi 6.png",
    valoracion: "★★★☆☆"
  },
  {
    nombre: "Smartwatch Xiaomi Redmi Watch",
    precio: "$54.990",
    imagen: "Smartwatch Xiaomi Redmi Watch.png",
    valoracion: "★★★★☆"
  },
  {
    nombre: "Silla Gamer Cougar Armor",
    precio: "$229.990",
    imagen: "Silla Gamer Cougar Armor.png",
    valoracion: "★★★★★"
  }
];

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    await Product.deleteMany();
    await Product.insertMany(productos);

    console.log("✅ Productos importados correctamente");

    mongoose.connection.close();
})
.catch(err => console.log(err));