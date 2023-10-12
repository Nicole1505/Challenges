import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css'; // Asegúrate de crear este archivo y ponerle estilos.

const NavComponent = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <NavLink 
            exact 
            to="/" 
            activeClassName="active-link" 
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            activeClassName="active-link" 
            className="nav-link"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            activeClassName="active-link" 
            className="nav-link"
          >
            Contact
          </NavLink>
        </li>
        {/* Agrega aquí más enlaces si los necesitas */}
      </ul>
    </nav>
  );
};

export default NavComponent;
