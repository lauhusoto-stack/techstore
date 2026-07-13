import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Header({ carrito, busqueda, setBusqueda }) {
  return (
    <header className="header">

      {/* Redes Sociales */}
      <div className="redes">

        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaFacebook />
        </a>

        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a 
          href="https://x.com" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaTwitter />
        </a>

      </div>

      {/* Logo */}
      <div className="logo">
        <h1>TechStore Chile</h1>
      </div>

      {/* Buscador */}
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* Botones */}
      <div className="usuarios">
        <button>Iniciar Sesión</button>
        <button>Registrarse</button>
      </div>

      {/* Carrito */}
      <div className="carrito">
        🛒 Carrito ({carrito})
      </div>

    </header>
  );
}

export default Header;