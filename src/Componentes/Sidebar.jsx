import React, { useState } from 'react';
import profileIMG from '../assets/profile.png';
import '../Css/Sidebar.css';
import profile from '../assets/profile-user.png'
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (

        <>

            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? '✕' : '👤'}
            </button>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="profile">
                    <img src={profileIMG} alt="Santiago Salas" className="profile-image" />
                    <h1>Santiago Salas</h1>
                    <p className="role">App developer</p>
                </div>
                <div className="contact-info">
                    <div className="info-item">
                        <span className="icon">📧</span>
                        <div className="info-text">
                            <strong>EMAIL</strong>
                            <br />
                            goasss24@gmail.com
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="icon">📞</span>
                        <div className="info-text">
                            <strong>PHONE</strong>
                            <br />
                            3127802445
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="icon">🎂</span>
                        <div className="info-text">
                            <strong>BIRTHDAY</strong>
                            <br />
                            31/03/2004
                        </div>
                    </div>
                    <div class="redes">
                        <a href="https://www.instagram.com/tu_usuario" target="_blank" class="redes-icono">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@tu_usuario" target="_blank" class="redes-icono">
                            <i class="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;