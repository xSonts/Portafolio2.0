import React from 'react'
import Modelado from '../assets/modelado.mp4'
import numeroMayor from '../assets/numeroMayor.png'
import responsive from '../assets/responsive.png'
import formulario from '../assets/formulario.png'
import sumatoria from '../assets/sumatoria.png'
import Componentes from '../assets/componentes.png'



const Portafolio = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <section id="portafolio" class="section">
            <h2>PORTAFOLIO</h2>
            <div class="blog-posts">
                <article class="blog-post">
                    <a href="https://github.com/xSonts/Clase-3/tree/main/Ejercicio%201" target="_blank">
                        <img src={responsive} alt="responsive" />
                    </a>
                    <div class="post-info">
                        <span class="category">Pagina responsive</span> •
                        <span class="date">Sept , 2024</span>
                    </div>
                    <h3>Diseño de una pagina responsive</h3>
                    <p>
                        A traves de los principios de css se realizó una pagina responsive para 3 pantallas diferentes
                    </p>
                </article>
                <article class="blog-post">
                    <a href="https://github.com/edwinmgallego/clase-practica-css-jueves/tree/609435e4d6ea22e268110b74dda46ab679a4baf5/ssalas2220709"
                        target="_blank">
                        <img src={formulario}  alt="formulario" />
                    </a>
                    <div class="post-info">
                        <span class="category">Formulario</span> •
                        <span class="date"> Sept , 2024</span>
                    </div>
                    <h3>Diseño de un formulario</h3>
                    <p>
                        Utilizando los principios de html se realizo un formulario que permitia la navegación por varias paginas
                    </p>
                </article>
                <article class="blog-post">
                    <a href="https://github.com/xSonts/Clase-8" target="_blank">
                        <img src={numeroMayor}  alt="numeroMayor" />
                    </a>
                    <div class="post-info">
                        <span class="category">Logica número mayor</span> •
                        <span class="date"> sept , 2024</span>
                    </div>
                    <h3>Encontrar el número mayor</h3>
                    <p>
                        Utilizando la logica de JS se realizo una funcion que encuentre el número mayor
                    </p>
                </article>
                <article class="blog-post">
                    <a href="https://uao-my.sharepoint.com/:v:/g/personal/santiago_salas_uao_edu_co/EWnDSIFTNtdLguCA42gghMcBiM2yPLBHrQ8oJDLtacwtKg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=OijeEm"
                        target="_blank">
                        <video src={Modelado}  autoPlay loop></video>
                    </a>
                    <div class="post-info">
                        <span class="category">Modelado 3D</span> •
                        <span class="date">Oct , 2023</span>
                    </div>
                    <h3>Diseño de un arma 3D</h3>
                    <p>
                        Utilizando blender se realizo un modelo 3d de un arma del videojuego Black Ops 2
                    </p>
                </article>
                <article class="blog-post">
                    <a href="https://www.canva.com/design/DAGRUNFYzCM/Ra5eIJFSOYl7elFkACiNpA/edit?utm_content=DAGRUNFYzCM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank">
                        <img src="https://www.justinjbird.me/images/apps/git.webp" alt="Git ignore" />
                    </a>

                    <div class="post-info">
                        <span class="category">Git Ignore</span> •
                        <span class="date">Agost , 2024</span>
                    </div>
                    <h3>Investigación sobre Git Ignore</h3>
                    <p>
                        Se realizó una investigación sobre como ignorar algunos archivos para subirlos a GitHub
                        realizando un paso a paso para esto.

                    </p>
                </article>
                <article class="blog-post">
                    <a href="https://github.com/xSonts/Clase-7.git" target="_blank">
                        <img src='https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png ' alt="sumatoria" />
                    </a>
                    <div class="post-info">
                        <span class="category">Principios JavaScript</span> •
                        <span class="date">Sept , 2024</span>
                    </div>
                    <h3>Logica de las funciones de JS</h3>
                    <p>
                        Utilizando los principios de JS se aprendió a usar las funciones
                    </p>
                </article>
                <article class="blog-post">
                    <a href="https://github.com/xSonts/clase9" target="_blank">
                        <img src={sumatoria}  alt="sumatoria" />
                    </a>
                    <div class="post-info">
                        <span class="category">Sumatoria contador</span> •
                        <span class="date">Sept , 2024</span>
                    </div>
                    <h3>Logica y diseño de un contador</h3>
                    <p>
                        Utilizando React se realizo el diseño y la funcionalidad de un contador
                    </p>
                </article>

                <article class="blog-post">
                    <a href="https://github.com/xSonts/clase9" target="_blank">
                        <img src={Componentes}  alt="sumatoria" />
                    </a>
                    <div class="post-info">
                        <span class="category">Componentes React</span> •
                        <span class="date">Sept , 2024</span>
                    </div>
                    <h3>Logica y diseño de los Componentes</h3>
                    <p>
                        Utilizando React se realizo el diseño y la funcionalidad de los Componentes
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Portafolio
