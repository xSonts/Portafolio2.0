import React from 'react'
import '../Css/Resume.css'

const Resume = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <section id="resume" className="section">
      <h2>RESUMEN</h2>
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
