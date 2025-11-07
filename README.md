# 🎧 Portafolio MSR-Inspirado

**Portafolio personal de Ángel Eduardo Rodríguez Bermúdez**, con una estética visual inspirada en *Monster Sirens Records (MSR)*. Este portafolio lo ire modificando poco a poco y con mejores animaciones e interacciones.

---

## 🚀 Tecnologías utilizadas

- **React.js (Vite)** – arquitectura basada en componentes.
- **CSS personalizado** – control visual total y animaciones adaptadas.
- **Intersection Observer API** – animaciones suaves al hacer scroll.
- **React Router DOM** – navegación entre secciones sin recargar.
- **Keyframes / Custom loader** – animación de carga con rombos dinámicos.

---

## 📦 Descripción

Este sitio funciona como un portafolio digital interactivo y moderno, con las siguientes secciones:

- 🔹 Sobre mí  
- 🔹 Proyectos  
- 🔹 Contacto  
- 🔹 Blog (experimental)

Cuenta con una **animación de carga inicial estilo MSR**, navegación fluida y diseño completamente **responsivo**.  
La estética se centra en una interfaz **oscura, limpia y geométrica**, reforzada por una tipografía futurista (`Orbitron`).

---

## ⚙️ Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/KanekiBurgos2602/ARK-Portafolio.git

# Entrar en la carpeta del proyecto
cd ARK-Portafolio

# Instalar dependencias
npm install

# Ejecutar en entorno de desarrollo
npm run dev

ARK-Portafolio/
│
├── public/                               # Archivos estáticos públicos
│
├── src/
│   ├── assets/
│   │   ├── css/                          # Hojas de estilo organizadas por vista
│   │   │   ├── about.css
│   │   │   ├── contact.css
│   │   │   ├── footer.css
│   │   │   ├── home_loader.css
│   │   │   ├── home.css
│   │   │   ├── navbar.css
│   │   │   └── projects.css
│   │   │
│   │   └── img/                          # Imágenes y logos
│   │       ├── Lappland.jpg
│   │       ├── Lappland_The_Decadenza_HG.png
│   │       ├── Logo.png
│   │       └── Texas.jpg
│   │
│   ├── components/                       # Componentes reutilizables
│   │   ├── footer.jsx
│   │   ├── home_loader.jsx
│   │   └── navbar.jsx
│   │
│   ├── pages/                            # Páginas principales del sitio
│   │   ├── about.jsx
│   │   ├── contact.jsx
│   │   ├── home.jsx
│   │   └── projects.jsx
│   │
│   ├── index.css                         # Estilos globales base
│   ├── main.jsx                          # Entrada principal de React
│   └── Routes.jsx                        # Definición de rutas
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md                             # Documentación del proyecto

