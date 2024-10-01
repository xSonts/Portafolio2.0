import React from 'react';
import cSharpImage from '../assets/c-sharp.png';
import htmlImage from '../assets/html.png';
import pythonImage from '../assets/python.png';
import unityImage from '../assets/unity.png';

const Experience = ({ isVisible }) => {
  if (!isVisible) return null; // Si la sección no es visible, no renderiza nada

  return (
    <section id="Experiencia" className="section">
      <h2>EXPERIENCIA</h2>
      <div className="blog-posts">
        <article className="blog-post">
          <img src={cSharpImage} alt="C#" />
          <div className="post-info">
            <span className="category">Experiencia en C#</span> •
            <span className="date">1 AÑO</span>
          </div>
        </article>
        <article className="blog-post">
          <img src={htmlImage} alt="HTML" />
          <div className="post-info">
            <span className="category">Experiencia en HTML</span> •
            <span className="date">1 AÑO</span>
          </div>
        </article>
        <article className="blog-post">
          <img src={pythonImage} alt="Python" />
          <div className="post-info">
            <span className="category">Experiencia en Python</span> •
            <span className="date">1 AÑO</span>
          </div>
        </article>
        <article className="blog-post">
          <img src={unityImage} alt="Unity" />
          <div className="post-info">
            <span className="category">Experiencia en manejo de Unity</span> •
            <span className="date">1 AÑO</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
