import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/src/imagenes/vector logo2.png" alt="Logo de Autos Platinum" />
      </div>
      <div className="navbar-title">
        Autos Platinum
      </div>
      <div className="navbar-menu">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Coches</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;