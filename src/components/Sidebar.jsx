function Sidebar({ cartItems }) {
  const beneficios = [
    { icono: "🚚", texto: "Envíos rápidos" },
    { icono: "🔒", texto: "Pago seguro" },
    { icono: "🛡️", texto: "Garantía" },
    { icono: "🎧", texto: "Soporte" },
  ];

  return (
    <aside className="sidebar">
      <section className="cart-section">
        <h2>Carrito</h2>

        {cartItems.length === 0 ? (
          <p>Aún no hay productos en el carrito.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <span>{item.nombre}</span>
                <span>{item.precio}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="beneficios-section">
        <h2>¿Por qué comprar en TechStore?</h2>

        <div className="beneficios">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="beneficio">
              <span className="icono">{beneficio.icono}</span>
              <p>{beneficio.texto}</p>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;