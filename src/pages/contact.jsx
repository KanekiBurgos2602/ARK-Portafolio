import NavBar from '../components/navbar';
import '../assets/css/contact.css';
import '../../src/index.css';
import logo from '../assets/img/Logo.png';

const Contact = () => {
  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-content fade-in">
        <h1 className="contact-title">Contacto</h1>
        <p className="contact-description">
          ¿Tienes alguna pregunta o propuesta? Completa el formulario y te responderé lo antes posible.
        </p>
        <form className="contact-form">
          <div className="form-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" placeholder="Tu nombre" required autoComplete="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" type="email" placeholder="Tu correo electrónico" required autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" placeholder="Escribe tu mensaje aquí..." rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-btn">Enviar</button>
        </form>
        <div className="contact-social">
          <a href="https://www.facebook.com/hector.burgos.9404362/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://github.com/KanekiBurgos2602" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/angel-eduardo-rodriguez-bermudez-99682a341/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
