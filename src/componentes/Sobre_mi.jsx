import foto from "../assets/imagenes/Dario-chevre.png";
import "../estilos/Sobre_mi.css";
import cv from "/public/C_V_DARIO JAVIER CATAGUA ZAMBRANO_2026.pdf";
import { GiNotebook } from "react-icons/gi";
import { TbFileCvFilled } from "react-icons/tb";

function Sobre_mi() {
  return (
    <div id="sobre-mi">
      <span>CONÓCEME MEJOR</span>
      <h1>Sobre Mí</h1>
      <hr />
      <div className="grid-sobre-mi">
        <img src={foto} alt="Retrato de Dario Catagua" />
        <div className="contenedor-inf">
          <h2>Ingeniero en Sistemas con base en Manabí, Ecuador</h2>
          <p>
            Soy Ingeniero en Sistemas con base en Manabí, Ecuador, apasionado
            por el desarrollo de soluciones digitales que permitan resolver
            problemas reales mediante la tecnología.
          </p>
          <p>
            Cuento con experiencia en desarrollo frontend, gestión de bases de
            datos, administración de sistemas y soporte tecnológico en entornos
            educativos. Durante mis pasantías en ELIZE participé en procesos de
            administración de sistemas y migración de plataformas hacia
            WordPress.
          </p>
          <p>
            Mi enfoque combina programación, análisis y seguridad informática
            para crear aplicaciones web eficientes, funcionales y orientadas al
            usuario. Además, he desarrollado investigación aplicada en
            ciberseguridad, con una publicación científica relacionada con
            herramientas forenses basadas en inteligencia artificial para la
            investigación de delitos informáticos en Ecuador.
          </p>
          <p>
            Actualmente busco integrarme a equipos tecnológicos donde pueda
            aportar soluciones innovadoras, fortalecer mis conocimientos y
            continuar creciendo como profesional en el área de TI.
          </p>
          <a href={cv} target="black">
            <button>
              <TbFileCvFilled />
              Ver CV
            </button>
          </a>
          <a
            className="articulo"
            href="https://publicacionescd.uleam.edu.ec/index.php/encriptar/article/view/1963"
            target="black"
          >
            <button className="articulo">
              <GiNotebook /> Artículo Científico
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sobre_mi;
