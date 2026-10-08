import "../estilos/Habilidades.css";
import PropTypes from "prop-types";

function TarjetasHabilidades({ MostrarHabilidades }) {
  return (
    <div className="tarjetas">
      {MostrarHabilidades.map((habilidad) => {
        const Icono = habilidad.Icono;

        return (
          <div className="cont-tarjeta" key={habilidad.Nombre}>
            <div className="icono" style={{ color: habilidad.Color }}>
              <Icono />
            </div>
            <h2>{habilidad.Nombre}</h2>
            <div className="tarjeta-vista">
              <h3>{habilidad.Descripción}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

TarjetasHabilidades.propTypes = {
  MostrarHabilidades: PropTypes.arrayOf(
    PropTypes.shape({
      Nombre: PropTypes.string.isRequired,
      Categoria: PropTypes.string,
      Icono: PropTypes.elementType,
      Color: PropTypes.string,
      Descripción: PropTypes.string,
    }),
  ).isRequired,
};

export default TarjetasHabilidades;
