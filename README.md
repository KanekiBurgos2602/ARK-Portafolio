# 🎧 ARK-Portafolio

**Portafolio personal interactivo inspirado en el universo visual y sonoro de Monster Sirens Records (MSR).**  
Desarrollado con React + Vite, combinando diseño moderno, estética sobria y una atmósfera digital personalizada.

---

## ✨ Características principales

- 🎬 Animación de carga inicial tipo intro MSR (con logo y rombos animados)
- 🧭 Navegación fluida con animaciones suaves entre secciones
- 🧑‍💻 Secciones organizadas: Sobre mí, Proyectos, Blog, Contacto
- 🎨 Estética oscura, con tipografía futurista (`Orbitron`)
- 📱 Diseño totalmente **responsivo** para escritorio, tablets y móviles

---

## 🧱 Tecnologías utilizadas

| Categoría        | Tecnologías                                |
|------------------|---------------------------------------------|
| Frontend         | `React`, `Vite`, `JavaScript`               |
| Estilos          | `CSS3`, `Tailwind opcional`, `Custom loader`|
| Animaciones      | `IntersectionObserver`, `CSS keyframes`     |
| Control de versión | `Git`, `GitHub`                           |

---

## 📁 Estructura del proyecto

ARK-Portafolio/
│
├── public/                             # Archivos públicos del sitio
│   └── Logo.png                        # Icono del sitio
│
├── src/
│   ├── assets/
│   │   ├── css/                        # Hojas de estilo por sección
│   │   │   ├── about.css
│   │   │   ├── contact.css
│   │   │   ├── footer.css
│   │   │   ├── home_loader.css
│   │   │   ├── home.css
│   │   │   ├── navbar.css
│   │   │   └── projects.css
│   │   │
│   │   └── img/                        # Recursos gráficos
│   │       ├── Lappland.jpg
│   │       ├── Lappland_The_Decadenza_HG_2.jpg
│   │       ├── Lappland_The_Decadenza_HG.png
│   │       ├── Logo.png
│   │       └── Texas.jpg
│   │
│   ├── components/                     # Componentes reutilizables
│   │   ├── footer.jsx
│   │   ├── home_loader.jsx
│   │   └── navbar.jsx
│   │
│   ├── pages/                          # Páginas principales
│   │   ├── about.jsx
│   │   ├── contact.jsx
│   │   ├── home.jsx
│   │   └── projects.jsx
│   │
│   ├── index.css                       # Estilos globales
│   ├── main.jsx                        # Punto de entrada React
│   └── Routes.jsx                      # Sistema de rutas
│
├── .gitignore                          # Archivos ignorados por Git
├── package.json                        # Dependencias y scripts
├── vite.config.js                      # Configuración de Vite
└── README.md                           # Documentación del proyecto


## 🚀 Instalación

Bash

# Clonar el repositorio
git clone https://github.com/KanekiBurgos2602/ARK-Portafolio.git
cd ARK-Portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

