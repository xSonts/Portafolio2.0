document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');
  
    // Función para mostrar una sección y ocultar las demás
    function showSection(sectionId) {
      sections.forEach((section) => {
        if (section.id === sectionId) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    }
  
    // Inicializar mostrando la sección activa
    const activeSection = document
      .querySelector('nav a.active')
      .getAttribute('data-section');
    showSection(activeSection);
  
    navLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = this.getAttribute('data-section');
  
        // Mostrar la sección seleccionada y ocultar las demás
        showSection(targetSection);
  
        // Actualizar la clase activa en la navegación
        navLinks.forEach((navLink) => {
          navLink.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });
  