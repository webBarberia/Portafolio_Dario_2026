import "../estilos/Navbar.css";
import "../estilos/Hero.css";
import "../estilos/Sobre_mi.css";
import foto from "../assets/imagenes/iconos/Logo-Dario-2026.png";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const enlaces = [
  { id: "inicio", texto: "Inicio" },
  { id: "sobre-mi", texto: "Sobre Mí" },
  { id: "habilidades", texto: "Habilidades" },
  { id: "proyectos", texto: "Proyectos" },
  { id: "contacto", texto: "Contacto" },
];

function Navbar() {
  const [enlaceActivo, cambiarEnlace] = useState("inicio");
  const [menuAbierto, cambiarMenu] = useState(false);
  // El tema inicial lo define el script de index.html (evita el parpadeo)
  const [tema, cambiarTema] = useState(
    () => document.documentElement.getAttribute("data-tema") || "oscuro",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema);
    try {
      localStorage.setItem("tema", tema);
    } catch {
      /* modo privado: se omite la persistencia */
    }
  }, [tema]);

  // ---------- Scroll spy: marca el enlace de la sección visible ----------
  useEffect(() => {
    const secciones = enlaces
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (secciones.length === 0) return undefined;

    let pendiente = false;

    const actualizar = () => {
      pendiente = false;

      // Línea de lectura: 35% de la altura de la pantalla
      const linea = window.innerHeight * 0.35;
      let activa = secciones[0].id;

      for (const seccion of secciones) {
        if (seccion.getBoundingClientRect().top <= linea) {
          activa = seccion.id;
        }
      }

      // Al llegar al final del documento se marca la última sección
      const alFinal =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (alFinal) {
        activa = secciones[secciones.length - 1].id;
      }

      cambiarEnlace((actual) => (actual === activa ? actual : activa));
    };

    const alScroll = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(actualizar);
    };

    actualizar();
    window.addEventListener("scroll", alScroll, { passive: true });
    window.addEventListener("resize", alScroll);

    return () => {
      window.removeEventListener("scroll", alScroll);
      window.removeEventListener("resize", alScroll);
    };
  }, []);

  const temaClaro = tema === "claro";

  const manejarClick = (id) => {
    cambiarEnlace(id);
    cambiarMenu(false);
  };

  return (
    <nav className="nav">
      <div className="logo">
        <img src={foto} alt="Logo de Dario Catagua" className="icono-web" />
        <h1>Dario Catagua</h1>
        <span>Ingeniero en Sistemas de Información</span>
      </div>

      <ul className={`link-nav ${menuAbierto ? "abierto" : ""}`}>
        {enlaces.map(({ id, texto }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => manejarClick(id)}
              className={enlaceActivo === id ? "active" : ""}
              aria-current={enlaceActivo === id ? "true" : undefined}
            >
              {texto}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-acciones">
        <button
          className="tema"
          aria-label={
            temaClaro
              ? "Cambiar a tema oscuro (noche)"
              : "Cambiar a tema claro (día)"
          }
          title={temaClaro ? "Modo noche" : "Modo día"}
          onClick={() => cambiarTema(temaClaro ? "oscuro" : "claro")}
        >
          <span className="icono-tema" key={tema}>
            {temaClaro ? "🌙" : "☀️"}
          </span>
        </button>
        <button
          className="menu-toggle"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          onClick={() => cambiarMenu((abierto) => !abierto)}
        >
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
