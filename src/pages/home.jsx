import '../assets/css/home.css';
import logo from '../assets/img/Logo.png';

const Home = () => {
  return (
  <main className="home-msr-wrapper">
    <div className="home-main-content">
      <section className="home-left-block">
        <img src={logo} alt="Logo lateral" className="home-left-logo" />
        <div className="home-left-text">
          <h1 className="home-name">ANGEL EDUARDO RODRIGUEZ BERMUDEZ</h1>
          <p className="home-role">Desarrollador Back End</p>
        </div>
      </section>
    </div>
  </main>
  );
};

export default Home;