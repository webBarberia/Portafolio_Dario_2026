import "../estilos/Proyecto.css";
import fotoDML from "../assets/imagenes/DML.png";
import barberia from "../assets/imagenes/Barberia.png";

// ✏️ Agrega aquí tus proyectos: copia un bloque y edítalo
const proyectos = [
  {
    id: "dario-music-lab",
    titulo: "Dario Music Lab",
    imagen: fotoDML,
    alt: "Vista previa de la plataforma Dario Music Lab",
    resumen: "Plataforma digital de música para DJs y amantes de la música",
    descripcion: [
      "Dario Music Lab es una plataforma enfocada en la distribución y gestión de contenido musical, diseñada para facilitar el acceso a diferentes géneros como reguetón, cumbia, merengue, electrónica y más.",
      "El proyecto permite a los usuarios explorar un catálogo musical, adquirir contenido exclusivo o acceder a descargas gratuitas, ofreciendo una experiencia intuitiva, moderna y fácil de utilizar. La interfaz está diseñada para brindar una navegación rápida y organizada, adaptándose a las necesidades de artistas, DJs y usuarios que buscan música de calidad en un solo lugar.",
    ],
    caracteristicas: [
      "Catálogo organizado por géneros musicales",
      "Opciones de compra y descarga gratuita",
      "Diseño intuitivo y adaptable a diferentes dispositivos",
      "Experiencia de usuario enfocada en facilidad de navegación",
    ],
    enlace: "https://dario-music-lab.vercel.app/",
  },
  {
    id: "youfather-barberia",
    titulo: "Youfather Barbería",
    imagen: barberia,
    alt: "Vista previa del sistema de citas de Youfather Barbería",
    resumen: "Sistema digital para gestión de citas y atención al cliente",
    descripcion: [
      "Youfather es una plataforma web desarrollada para modernizar la gestión de servicios de barbería, permitiendo a los clientes solicitar citas de manera rápida y sencilla.",
      "El sistema integra una funcionalidad de reservas y un botón de contacto directo mediante WhatsApp, facilitando la comunicación entre el cliente y la barbería. Su diseño moderno e intuitivo permite una experiencia cómoda, donde los usuarios pueden conocer los servicios disponibles y agendar su atención sin complicaciones.",
    ],
    caracteristicas: [
      "Sistema de solicitud y gestión de citas",
      "Integración directa con WhatsApp",
      "Diseño atractivo y profesional",
      "Navegación intuitiva enfocada en la experiencia del cliente",
    ],
    enlace: "https://you-father-barbershop.vercel.app/index.html#inicio",
  },
];

function Proyecto() {
  return (
    <div id="proyectos" className="cont-proyectos">
      <section>
        <span>PROYECTOS RECIENTES</span>
        <h1>Mis Proyectos</h1>
        <hr />
        <p className="intro-proyectos">
          Estos proyectos representan mi enfoque en el desarrollo de soluciones
          digitales modernas, combinando diseño, funcionalidad y una experiencia
          de usuario intuitiva para resolver necesidades reales
        </p>

        <div className="cont-card-proyecto">
          {proyectos.map((proyecto) => (
            <article className="card-proyecto" key={proyecto.id}>
              <div className="media">
                <img src={proyecto.imagen} alt={proyecto.alt} loading="lazy" />
              </div>

              <h3>{proyecto.titulo}</h3>
              <h4>{proyecto.resumen}</h4>

              {proyecto.descripcion.map((parrafo) => (
                <p key={parrafo.slice(0, 30)}>{parrafo}</p>
              ))}

              <h5>Características Principales:</h5>
              <ul>
                {proyecto.caracteristicas.map((caracteristica) => (
                  <li key={caracteristica}>{caracteristica}</li>
                ))}
              </ul>

              <a
                className="btn-pagina"
                href={proyecto.enlace}
                target="_blank"
                rel="noreferrer"
              >
                Ir a la Página
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Proyecto;
