import { useEffect, useState } from "react";

import banner1 from "../assets/imagenes/banner.png";
import banner2 from "../assets/imagenes/banner2.png";
import banner3 from "../assets/imagenes/banner3.png";

function Banner() {
  const banners = [
    {
      imagen: banner1,
      titulo: ["Los Mejores Productos", "Tecnológicos"],
      descripcion:
        "Descubre notebooks, accesorios y dispositivos con las mejores ofertas.",
    },
    {
      imagen: banner2,
      titulo: ["Ofertas Exclusivas", "Solo Hoy"],
      descripcion:
        "Aprovecha descuentos de hasta un 40% en productos seleccionados.",
    },
    {
      imagen: banner3,
      titulo: ["Nueva Colección", "Gaming"],
      descripcion:
        "Encuentra notebooks, monitores y periféricos para gamers.",
    },
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [banners.length]);

  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${banners[indice].imagen})` }}
    >
      <div className="banner-contenido">
        <h1>
          <span>{banners[indice].titulo[0]}</span>
          <span>{banners[indice].titulo[1]}</span>
        </h1>

        <p>{banners[indice].descripcion}</p>

        <a href="#ofertas" className="banner-button">
          Ver ofertas
        </a>

        {/* Indicadores */}
        <div className="banner-indicadores">
          {banners.map((_, i) => (
            <span
              key={i}
              className={i === indice ? "activo" : ""}
              onClick={() => setIndice(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;