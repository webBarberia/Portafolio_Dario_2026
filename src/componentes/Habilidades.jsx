import "../estilos/Habilidades.css";
import { useState } from "react";
import TarjetasHabilidades from "../componentes/TarjetasHabilidades";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaWix } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { MdOutlineLaptopChromebook } from "react-icons/md";

const todasHabilidades = [
  {
    Nombre: "HTML5",
    Categoria: "Front-End",
    Icono: FaHtml5,
    Color: "red",
    Descripción:
      "Lenguaje utilizado para estructurar y organizar el contenido de páginas web.",
  },
  {
    Nombre: "CSS",
    Categoria: "Front-End",
    Icono: FaCss3Alt,
    Color: "#1572B6",
    Descripción:
      "Lo uso para el diseño de interfaces web atractivas, responsivas y modernas",
  },
  {
    Nombre: "JAVASCRIPT",
    Categoria: "Front-End",
    Icono: TbBrandJavascript,
    Color: "#F7DF1E",
    Descripción:
      "Lo uso para el desarrollo de funcionalidades e interacciones dinámicas para la web",
  },
  {
    Nombre: "REACT",
    Categoria: "Front-End",
    Icono: FaReact,
    Color: "red",
    Descripción:
      "Con este framework creo interfaces web dinámicas mediante componentes reutilizables",
  },
  {
    Nombre: "PYTHON",
    Categoria: "Back-End",
    Icono: FaPython,
    Color: "green",
    Descripción:
      "Lenguaje utilizado para el desarrollo de scripts, aplicaciones y soluciones automatizadas",
  },
  {
    Nombre: "MYSQL",
    Categoria: "Back-End",
    Icono: SiMysql,
    Color: "blue",
    Descripción:
      "Con este lenguaje gestiono y consulto bases de datos relacionales",
  },
  {
    Nombre: "WORDPRESS",
    Categoria: "CMS",
    Icono: FaWordpress,
    Color: "#000000",
    Descripción: "Creo y administro sitios web mediante CMS",
  },
  {
    Nombre: "WIX",
    Categoria: "CMS",
    Icono: FaWix,
    Color: "#172e13",
    Descripción: "Creo y personalizo sitios web mediante herramientas no-code.",
  },
];

function Habilidades() {
  const [categoriaActiva, cambiarCategoria] = useState("todas");
  const habilidadesFiltradas =
    categoriaActiva === "todas"
      ? todasHabilidades
      : todasHabilidades.filter(
          (habilidad) => habilidad.Categoria === categoriaActiva,
        );

  return (
    <div id="habilidades">
      <span>MI ARSENAL TÉCNICO</span>
      <h1>Habilidades Especializadas</h1>
      <hr />
      <p>
        Tecnologías y herramientas que utilizo para crear soluciones digitales
        modernas.
      </p>
      <div className="cont-botones">
        <button
          onClick={() => cambiarCategoria("todas")}
          className={categoriaActiva === "todas" ? "active" : ""}
        >
          Todas
        </button>
        <button
          onClick={() => cambiarCategoria("Front-End")}
          className={categoriaActiva === "Front-End" ? "active" : ""}
        >
          <div className="icon-front">
            <MdOutlineLaptopChromebook />
          </div>
          Front-End
        </button>
        <button
          onClick={() => cambiarCategoria("Back-End")}
          className={categoriaActiva === "Back-End" ? "active" : ""}
        >
          Back-End & Lenguajes
        </button>
        <button
          onClick={() => cambiarCategoria("CMS")}
          className={categoriaActiva === "CMS" ? "active" : ""}
        >
          CMS & Plataformas No-Code
        </button>
      </div>
      <TarjetasHabilidades MostrarHabilidades={habilidadesFiltradas} />
    </div>
  );
}
export default Habilidades;
