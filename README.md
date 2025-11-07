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

src/
├── assets/
│   ├── css/
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   ├── home_loader.css
│   │   ├── home.css
│   │   ├── navbar.css
│   │   └── projects.css
│   ├── img/
│   │   ├── Lappland.jpg
│   │   ├── Lappland_The_Decadenza_HG_2.jpg
│   │   ├── Lappland_The_Decadenza_HG.png
│   │   ├── Logo.png
│   │   └── Texas.jpg
├── components/
│   ├── footer.jsx
│   ├── home_loader.jsx
│   └── navbar.jsx
├── pages/
│   ├── about.jsx
│   ├── contact.jsx
│   ├── home.jsx
│   └── projects.jsx
├── index.css
├── main.jsx
└── Routes.jsx

## 🚀 Instalación

Bash

# Clonar el repositorio
git clone https://github.com/KanekiBurgos2602/ARK-Portafolio.git
cd ARK-Portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

