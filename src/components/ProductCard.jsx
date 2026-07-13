import { useCallback } from "react";

function ProductCard({ producto, agregarCarrito }) {
  const playClickSound = useCallback(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(520, audioContext.currentTime);
    gain.gain.setValueAtTime(0.12, audioContext.currentTime);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);
  }, []);

  const handleAddToCart = (producto) => {
    playClickSound();
    agregarCarrito(producto);
  };

  return (
    <div className="product-card">
      <img
        src={new URL(
          `../assets/imagenes/${producto.imagen}`,
          import.meta.url
        ).href}
        alt={producto.nombre}
        className="product-img"
      />

      <h3>{producto.nombre}</h3>

      <p className="precio">{producto.precio}</p>

      <p className="valoracion">{producto.valoracion}</p>

      <button onClick={() => handleAddToCart(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;