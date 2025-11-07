import { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import '../assets/css/projects.css';
import '../../src/index.css';

import Lappland1 from '../assets/img/Lappland_The_Decadenza_HG_2.jpg';
import Lappland2 from '../assets/img/Lappland_The_Decadenza_HG.png';
import Lappland3 from '../assets/img/Lappland.jpg';
import Texas from '../assets/img/Texas.jpg';

const projects = [
  {
    title: 'PROYECTO 1',
    image: Lappland1,
    description: 'Proyecto de ilustración digital inspirado en Lappland. Técnica mixta y retoque avanzado.',
  },
  {
    title: 'PROYECTO 2',
    image: Lappland2,
    description: 'Arte conceptual para personaje Lappland. Uso de texturas y composición dinámica.',
  },
  {
    title: 'PROYECTO 3',
    image: Lappland3,
    description: 'Retrato digital de Lappland. Enfoque en expresión y detalles de cabello.',
  },
  {
    title: 'PROYECTO 4',
    image: Texas,
    description: 'Ilustración digital de Texas. Trabajo en luces, sombras y fondo atmosférico.',
  },
];

const FADE_DURATION = 400;

// Tarjeta individual de proyecto
const ProjectCard = ({ title, image, onClick }) => (
  <div className="project-slot" onClick={onClick}>
    <div className="project-title">{title}</div>
    <img src={image} alt={title} />
  </div>
);

// Vista expandida de proyecto
const ExpandedProject = ({ project, onClose, isClosing }) => (
  <div className={`project-overlay${isClosing ? ' fade-out' : ''}`}>
    <div className={`project-slot expanded${isClosing ? ' fade-out' : ''}`}>
      <button className="project-close-btn" onClick={onClose} title="Cerrar" disabled={isClosing}>
        &times;
      </button>
      <div className="expanded-title">{project.title}</div>
      <div className="expanded-row">
        <img src={project.image} alt={project.title} className="expanded-img" />
        <div className="expanded-desc">{project.description}</div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [expanded, setExpanded] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [showGridFade, setShowGridFade] = useState(false);

  useEffect(() => {
    setShowGridFade(true);
    const timer = setTimeout(() => setShowGridFade(false), FADE_DURATION);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setExpanded(null);
      setIsClosing(false);
      setShowGridFade(true);
      setTimeout(() => setShowGridFade(false), FADE_DURATION);
    }, FADE_DURATION);
  };

  return (
    <div className={`projects-page${expanded !== null ? ' overlay-active' : ''}`}>
      <NavBar />
      <h1 className="projects-title">PROYECTOS</h1>

      {expanded === null && !isClosing && (
        <div className={`projects-content${showGridFade ? ' fade-in-grid' : ''}`}>
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              image={project.image}
              onClick={() => setExpanded(i)}
            />
          ))}
        </div>
      )}

      {expanded !== null && (
        <ExpandedProject
          project={projects[expanded]}
          onClose={handleClose}
          isClosing={isClosing}
        />
      )}
    </div>
  );
};

export default Projects;
