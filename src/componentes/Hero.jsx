import "../estilos/Hero.css";
import imagen from "../assets/imagenes/Dario_Computador.png";
import { FaFacebook } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoWhatsapp } from "react-icons/io";

const redesHero = [
  {
    nombre: "Facebook",
    enlace: "https://www.facebook.com/dario.catagua.2025?locale=es_LA",
    Icono: FaFacebook,
  },
  {
    nombre: "GitHub",
    enlace: "https://github.com/webBarberia",
    Icono: VscGithubInverted,
  },
  {
    nombre: "WhatsApp",
    enlace: "https://wa.me/593981084536",
    Icono: IoLogoWhatsapp,
  },
];

function Hero() {
  return (
    <div id="inicio" className="inf_portada">
      <div className="texto-hero">
        <h1>
          Hola, Soy <strong>Dario Javier Catagua Zambrano</strong>
        </h1>
        <h2>
          <em>Ingeniero en Sistemas</em>
        </h2>
        <p>
          Especialista en desarrollo full-stack, automatización y soluciones de
          sistemas a medida. Soy un Ingeniero en Sistemas apasionado por
          transformar problemas complejos en soluciones digitales eficientes...
        </p>
        <button
          onClick={() =>
            document
              .getElementById("proyectos")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="boton-hero"
        >
          Ver Proyectos
        </button>

        <div className="Redes_sociales">
          {redesHero.map(({ nombre, enlace, Icono }) => (
            <a
              key={nombre}
              href={enlace}
              target="_blank"
              rel="noreferrer"
              aria-label={nombre}
              title={nombre}
            >
              <Icono />
            </a>
          ))}
        </div>
      </div>

      <div className="Img_hero">
        <img src={imagen} alt="Dario Catagua trabajando en su computador" />
      </div>
    </div>
  );
}

export default Hero;
