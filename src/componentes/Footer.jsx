import "../estilos/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Dario Catagua - Ingeniero en Sistemas.
        Todos los derechos reservados.
      </p>

      <p className="footer-credit">Diseñado y desarrollado con ❤️ por mí.</p>
    </footer>
  );
}
export default Footer;
