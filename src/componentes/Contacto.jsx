import { useState } from "react";
import "../estilos/Contacto.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

// ✏️ PEGA AQUÍ TU ENDPOINT DE FORMSPREE
// (créalo gratis en https://formspree.io → "New Form" → copia la URL)
// Ejemplo: "https://formspree.io/f/abcde123"
const ENDPOINT_FORMSPREE = "https://formspree.io/f/mppqdyod";

// ✏️ Tu contacto directo (se usa en la tarjeta de redes y en los avisos)
const CONTACTO_RAPIDO = {
  correo: "dc1312934977@gmail.com",
  whatsapp: "https://wa.me/593981084536",
};

// ✏️ Edita aquí tus enlaces reales de redes y contacto
const redes = [
  {
    nombre: "GitHub",
    usuario: "webBarberia",
    enlace: "https://github.com/webBarberia",
    Icono: FaGithub,
  },
  {
    nombre: "LinkedIn",
    usuario: "Dario Catagua",
    enlace: "https://www.linkedin.com/in/dario-catagua-zambrano-b908483b5/",
    Icono: FaLinkedin,
  },
  {
    nombre: "Correo",
    usuario: CONTACTO_RAPIDO.correo,
    enlace: `mailto:${CONTACTO_RAPIDO.correo}`,
    Icono: FaEnvelope,
  },
  {
    nombre: "WhatsApp",
    usuario: "+593 98 10 84 536",
    enlace: CONTACTO_RAPIDO.whatsapp,
    Icono: FaWhatsapp,
  },
];

const estadoInicial = { nombre: "", correo: "", asunto: "", mensaje: "" };

function Contacto() {
  const [datos, setDatos] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const [estadoEnvio, setEstadoEnvio] = useState("inicial"); // inicial | enviando | listo | error
  const [mensajeError, setMensajeError] = useState("");
  // Trampa para bots: si la rellenan, Formspree descarta el mensaje
  const [gotcha, setGotcha] = useState("");

  const actualizar = (e) => {
    const { name, value } = e.target;
    setDatos((prev) => ({ ...prev, [name]: value }));
    setErrores((prev) => ({ ...prev, [name]: undefined }));
    // Al empezar a escribir de nuevo se oculta el aviso de éxito
    if (estadoEnvio === "listo" || estadoEnvio === "error") {
      setEstadoEnvio("inicial");
      setMensajeError("");
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!datos.nombre.trim()) {
      nuevosErrores.nombre = "Por favor escribe tu nombre.";
    }
    if (!datos.correo.trim()) {
      nuevosErrores.correo = "Necesito un correo para responderte.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) {
      nuevosErrores.correo = "El formato del correo no es válido.";
    }
    if (!datos.mensaje.trim()) {
      nuevosErrores.mensaje = "Cuéntame brevemente tu idea.";
    } else if (datos.mensaje.trim().length < 10) {
      nuevosErrores.mensaje =
        "Agrega un poco más de detalle (mín. 10 caracteres).";
    }
    return nuevosErrores;
  };

  const enviar = async (e) => {
    e.preventDefault();
    const nuevosErrores = validar();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    // Aviso útil mientras el endpoint siga sin configurarse
    const endpointConfigurado =
      ENDPOINT_FORMSPREE.includes("formspree.io/f/") &&
      !ENDPOINT_FORMSPREE.includes("TU_CODIGO");
    if (!endpointConfigurado) {
      setEstadoEnvio("error");
      setMensajeError(
        `Formulario sin configurar: revisa la constante ENDPOINT_FORMSPREE en Contacto.jsx (valor actual: "${ENDPOINT_FORMSPREE}").`,
      );
      return;
    }

    setEstadoEnvio("enviando");
    setMensajeError("");

    try {
      const respuesta = await fetch(ENDPOINT_FORMSPREE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...datos,
          _gotcha: gotcha,
          _subject: datos.asunto.trim() || "Nuevo mensaje del portafolio",
        }),
      });

      if (!respuesta.ok) {
        const datosError = await respuesta.json().catch(() => ({}));
        throw new Error(
          datosError.errors?.[0]?.message ||
            "No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos.",
        );
      }

      setEstadoEnvio("listo");
      setDatos(estadoInicial);
      setGotcha("");
    } catch (error) {
      setEstadoEnvio("error");
      setMensajeError(
        error.message ||
          "No se pudo conectar con el servidor. Revisa tu conexión e inténtalo otra vez.",
      );
    }
  };

  return (
    <div id="contacto" className="contacto">
      <div className="contenedor-contacto">
        <span>HABLEMOS</span>
        <h1>Contacto</h1>
        <hr />
        <h2>¿Tienes algún proyecto en mente?</h2>
        <p>
          Estoy disponible para conversar sobre proyectos, oportunidades
          laborales o colaboraciones. Escríbeme por el formulario o contáctame
          directo por cualquiera de mis redes.
        </p>
      </div>

      <div className="grid-contacto">
        <aside className="tarjeta-redes">
          <h3>Redes sociales</h3>
          <p className="subtitulo-redes">
            ¿Prefieres hablar directo? Encuéntrame en cualquiera de estas
            plataformas.
          </p>

          <ul className="lista-redes">
            {redes.map(({ nombre, usuario, enlace, Icono }) => (
              <li key={nombre}>
                <a
                  className="enlace-red"
                  href={enlace}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icono-red">
                    <Icono />
                  </span>
                  <span className="texto-red">
                    <strong>{nombre}</strong>
                    <small>{usuario}</small>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="disponibilidad">
            <span className="punto" /> Disponible para nuevos proyectos
          </div>
        </aside>

        <div className="formulario">
          <h3>Envíame un mensaje</h3>

          {estadoEnvio === "listo" && (
            <p className="aviso-exito" role="status">
              <FiCheckCircle /> ¡Gracias! Tu mensaje fue enviado, te responderé
              lo antes posible.
            </p>
          )}

          {estadoEnvio === "error" && (
            <div className="aviso-error" role="alert">
              <p className="aviso-error-texto">
                <FiAlertCircle /> <span>{mensajeError}</span>
              </p>
              <p className="aviso-error-alternativas">
                Mientras tanto, escríbeme directo:
                <a href={`mailto:${CONTACTO_RAPIDO.correo}`}>
                  {CONTACTO_RAPIDO.correo}
                </a>
                <a
                  href={CONTACTO_RAPIDO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          )}

          <form onSubmit={enviar} noValidate>
            {/* Campo trampa invisible: los bots lo rellenan y Formspree lo ignora */}
            <input
              className="campo-oculto"
              type="text"
              name="_gotcha"
              value={gotcha}
              onChange={(e) => setGotcha(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="campo">
              <label htmlFor="nombre">
                <FiUser /> Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre completo"
                autoComplete="name"
                value={datos.nombre}
                onChange={actualizar}
                className={errores.nombre ? "input-error" : ""}
              />
              {errores.nombre && (
                <small className="error">{errores.nombre}</small>
              )}
            </div>

            <div className="campo">
              <label htmlFor="correo">
                <FiMail /> Correo
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                autoComplete="email"
                value={datos.correo}
                onChange={actualizar}
                className={errores.correo ? "input-error" : ""}
              />
              {errores.correo && (
                <small className="error">{errores.correo}</small>
              )}
            </div>

            <div className="campo campo-completo">
              <label htmlFor="asunto">Asunto</label>
              <input
                id="asunto"
                name="asunto"
                type="text"
                placeholder="¿De qué quieres hablar?"
                value={datos.asunto}
                onChange={actualizar}
              />
            </div>

            <div className="campo campo-completo">
              <label htmlFor="mensaje">
                <FiMessageSquare /> Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Cuéntame sobre tu proyecto, idea u oportunidad..."
                rows="5"
                value={datos.mensaje}
                onChange={actualizar}
                className={errores.mensaje ? "input-error" : ""}
              />
              {errores.mensaje && (
                <small className="error">{errores.mensaje}</small>
              )}
            </div>

            <button
              className="boton-enviar"
              type="submit"
              disabled={estadoEnvio === "enviando"}
            >
              {estadoEnvio === "enviando" ? (
                "Enviando..."
              ) : (
                <>
                  Enviar mensaje <FiSend className="icono-enviar" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
