import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Styles/EstiloFP.css';

const FormularioPlantas = () => {
  return (
    
    
   
   
          <div className="container">

              <h1>Formulario de Registro de Plantas de Herbario</h1>

              <div className="section Criterios">
                  <h2>Criterios Taxonómicos</h2>
                  <div className="btn-group" role="group">
                      <button
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                      >
                          Nombre Científico
                      </button>
                      <ul className="dropdown-menu">
                          <li>
                              <a className="dropdown-item" href="#">
                                  Enlace desplegable
                              </a>
                          </li>
                          <li>
                              <a className="dropdown-item" href="#">
                                  Enlace desplegable
                              </a>
                          </li>
                      </ul>
                  </div>
                  <textarea
                      name="Ct"
                      className="form-control"
                      placeholder="Escribe aquí los criterios taxonómicos..."
                      required
                  ></textarea>
                  <div className="invalid-feedback">
                      Por favor, proporciona los criterios taxonómicos.
                  </div>
              </div>

              <div className="section DatosL">
                  <h2>Datos de la Localidad</h2>
                  <div className="row g-3 needs-validation" noValidate>
                      <div className="col-md-4">
                          <label htmlFor="Pais" className="form-label">
                              País:
                          </label>
                          <input
                              type="text"
                              className="form-control"
                              id="Pais"
                              name="Pais"
                              required />
                          <div className="invalid-feedback">
                              Por favor, proporciona el país.
                          </div>
                      </div>
                      <div className="col-md-4">
                          <label htmlFor="Estado" className="form-label">
                              Estado/Provincia:
                          </label>
                          <input
                              type="text"
                              className="form-control"
                              id="Estado"
                              name="Estado"
                              required />
                          <div className="invalid-feedback">
                              Por favor, proporciona el estado/provincia.
                          </div>
                      </div>
                      <div className="col-md-4">
                          <label htmlFor="Municipio" className="form-label">
                              Municipio:
                          </label>
                          <input
                              type="text"
                              className="form-control"
                              id="Municipio"
                              name="Municipio"
                              required />
                          <div className="invalid-feedback">
                              Por favor, proporciona el municipio.
                          </div>
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="Localidad" className="form-label">
                              Localidad:
                          </label>
                          <input
                              type="text"
                              className="form-control"
                              id="Localidad"
                              name="Localidad"
                              required />
                          <div className="invalid-feedback">
                              Por favor, proporciona la localidad.
                          </div>
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="Elevacion" className="form-label">
                              Elevación (en metros):
                          </label>
                          <input
                              type="text"
                              className="form-control"
                              id="Elevacion"
                              name="Elevacion"
                              required />
                          <div className="invalid-feedback">
                              Por favor, proporciona la elevación en metros.
                          </div>
                      </div>
                  </div>
              </div>

              <div className="section datosColector">
                  <h2>Datos del Colector</h2>
                  <div className="row g-3 needs-validation" noValidate>
                      <div className="col-md-4">
                          <label htmlFor="Colector" className="form-label">
                              Colector:
                          </label>
                          <input
                              type="text"
                              className="form-control"
                              id="Colector"
                              name="Colector"
                              required />
                          <div className="invalid-feedback">
                              Por favor, proporciona el nombre del colector.
                          </div>
                      </div>
                      <div className="col-md-4">
                          <label htmlFor="NumeroColector" className="form-label">
                              Número de Colector:
                          </label>
                          <input
                              type="text"
                              className="form-control"
                              id="NumeroColector"
                              name="NumeroColector"
                              required />
                          <div className="invalid-feedback">
                              Por favor, proporciona el número de colector.
                          </div>
                      </div>
                      <div className="col-md-4">
                          <label htmlFor="Fecha" className="form-label">
                              Fecha de Colecta:
                          </label>
                          <input
                              type="date"
                              className="form-control"
                              id="Fecha"
                              name="Fecha"
                              required />
                          <div className="invalid-feedback">
                              Por favor, proporciona la fecha de colecta.
                          </div>
                      </div>
                  </div>
              </div>

              <button type="submit" className="btn btn-primary">
                  Enviar
              </button>
          </div>
  );
};

export default FormularioPlantas;
