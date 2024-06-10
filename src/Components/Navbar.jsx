import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Styles/StyleN.css';
import {Link} from "react-router-dom";
import { useAuth } from '../AuthContext';




const NavBar = () => {
  const { logout } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/Home"> Herbario </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Herbario</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Inicio</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Registro
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" to="/FormularioPlantas">Registrar nueva planta</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/FormularioR">Registrar Recolector</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                <Link onClick={logout}  className="nav-link active" aria-current="page" to="/Login">Cerrar sesion</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

  


      

    
  );
};

export default NavBar;
