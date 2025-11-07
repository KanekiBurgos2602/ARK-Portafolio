import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import HomeLoader from './components/home_loader';

function AppRoutes() {
  return (
    <Router>
      <div className="App">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomeLoader />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutes;
