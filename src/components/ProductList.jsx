import productos from "../data/productos.json";
import ProductCard from "./ProductCard";

function ProductList({ busqueda, agregarCarrito }) {
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section id="ofertas" className="productos">
      <h2>Productos Destacados</h2>

      {productosFiltrados.length === 0 ? (
        <p className="sin-productos">
          No se encontraron productos.
        </p>
      ) : (
        <div className="contenedor-productos">
          {productosFiltrados.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              agregarCarrito={agregarCarrito}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;