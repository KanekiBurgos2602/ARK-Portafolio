import '../assets/css/footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} Ángel Eduardo Rodríguez Bermúdez. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;