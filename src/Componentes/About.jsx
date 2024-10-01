import React from 'react'
import '../Css/About.css'

const About = ({ isVisible }) => {
    if (!isVisible) return null;
    return (
        <section id="about" className="section">
            <h2>HABILIDADES</h2>
            <div className="skills-container">
                <div className="skills-column">
                    <h3>Habilidades Duras</h3>
                    <ul>
                        <li>Lenguajes de Programación C#</li>
                        <li>Desarrollo Web (HTML, CSS, JavaScript)</li>
                        <li>Gestión de Bases de Datos (SQL, NoSQL)</li>
                        <li>Control de Versiones (Git, GitHub)</li>
                        <li>Algoritmos y Estructuras de Datos</li>
                        <li>Gestión de Proyectos</li>
                    </ul>
                </div>
                <div className="skills-column">
                    <h3>Habilidades Blandas</h3>
                    <ul>
                        <li>Comunicación Efectiva</li>
                        <li>Trabajo en Equipo</li>
                        <li>Resolución de Problemas</li>
                        <li>Gestión del Tiempo</li>
                        <li>Adaptabilidad y Flexibilidad</li>
                        <li>Habilidades Sociales</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
