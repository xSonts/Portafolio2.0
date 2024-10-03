import React from 'react'
import '../Css/Resume.css'

const Resume = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <section id="resume" className="section">
      <h2>RESUMEN</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>¿Quien soy?</h3>
          <p>      Soy una persona proactiva, organizada y responsable, con un
                  sólido enfoque en la excelencia en todo lo que hago. Mi
                  naturaleza proactiva me impulsa a anticipar y abordar desafíos
                  antes de que se conviertan en problemas, asegurando que los
                  proyectos avancen de manera eficiente y efectiva. Me
                  enorgullezco de mi capacidad para mantener una alta
                  organización en todas mis tareas, lo que me permite gestionar
                  múltiples responsabilidades simultáneamente sin comprometer la
                  calidad del trabajo.
                  Mi sentido de la responsabilidad se refleja en mi compromiso
                  constante con el cumplimiento de plazos y la entrega de
                  resultados que superan las expectativas.</p>
        </div>
      </div>

      <h1>ESTUDIOS</h1>
      <div className="education-container">
        <div className="education-item">
          <h3>Instituto Técnico Fray Luis Amigo</h3>
          <span className="date">2019 — 2021</span>
          <p>Graduado con honores y excelentes notas</p>
        </div>
        <div className="education-item">
          <h3>Universidad Autónoma de Occidente</h3>
          <span className="date">2022 - Presente</span>
          <p>Cursando Ingeniería Multimedia</p>
        </div>
      </div>
    </section>
  )
}

export default Resume
