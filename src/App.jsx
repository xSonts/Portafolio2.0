import React, { useState } from 'react';
import Sidebar from './Componentes/Sidebar';
import Portfolio from './Componentes/Portafolio'; // Importación correcta de Portafolio
import Resume from './Componentes/Resume';
import About from './Componentes/About';
import Experience from './Componentes/Experience';
import NavBar from './Componentes/NavBar'; // Ruta corregida

function App() {
  // Estado para controlar qué sección está activa
  const [activeSection, setActiveSection] = useState('resume');

  // Función para cambiar la sección visible
  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="container">
      <Sidebar />
      <main>
      <NavBar activeSection={activeSection} showSection={showSection} />

        {/* Sección Portafolio */}
        <Portfolio isVisible={activeSection === 'portafolio'} />

        {/* Sección Resumen */}
        <Resume isVisible={activeSection === 'resume'} />

        {/* Sección Acerca de mí */}
        <About isVisible={activeSection === 'about'} />

        {/* Sección Experiencia */}
        <Experience isVisible={activeSection === 'experiencia'} />
      </main>
    </div>
  );
}

export default App;
