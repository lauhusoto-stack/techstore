import { useState } from "react";
import "./css/style.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import InfoBar from "./components/InfoBar";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const agregarCarrito = (producto) => {
    setCartItems((prevItems) => [...prevItems, producto]);
  };

  return (
    <>
      <Header
        carrito={cartItems.length}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <Navbar />

      <Banner />

      <div className="main-content">
        <ProductList
          busqueda={busqueda}
          agregarCarrito={agregarCarrito}
        />

        <Sidebar cartItems={cartItems} />
      </div>

      <InfoBar />

      <Footer />
    </>
  );
}

export default App;