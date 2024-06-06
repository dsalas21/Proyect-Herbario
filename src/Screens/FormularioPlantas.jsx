import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Styles/EstiloFP.css';
import {Link} from "react-router-dom";
const FormularioPlantas = () => {
  const [scientific_name, setScientific_name] = useState("");
  const [common_name, setCommon_name] = useState("");
  const [family, setFamily] = useState("");
  const [genus, setGenus] = useState("");
  const [species, setSpecies] = useState("");
  const [description, setDescription] = useState("");
  const [habitat, setHabitat] = useState("");
  const [location, setLocation] = useState("");
  
  return (
    <div className="fp-container">
      <h1 className="fp-title">Formulario de Registro de Plantas de Herbario</h1>

      <div className="fp-section fp-Criterios">
        <h2 className="fp-subtitle">Criterios Taxonómicos</h2>
        <div className="form-group">
          <label htmlFor="scientific_name">Nombre Científico:</label>
          <input
            type="text"
            className="form-control"
            id="scientific_name"
            name="scientific_name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="common_name">Nombre Común:</label>
          <input
            type="text"
            className="form-control"
            id="common_name"
            name="common_name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="family">Familia:</label>
          <input
            type="text"
            className="form-control"
            id="family"
            name="family"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genus">Género:</label>
          <input
            type="text"
            className="form-control"
            id="genus"
            name="genus"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="species">Especie:</label>
          <input
            type="text"
            className="form-control"
            id="species"
            name="species"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="habitat">Hábitat:</label>
          <input
            type="text"
            className="form-control"
            id="habitat"
            name="habitat"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Ubicación:</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            required
          />
        </div>
      </div>

      <div className="fp-section fp-DatosL">
        <h2 className="fp-subtitle">Datos de la Localidad</h2>
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
              required
            />
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
              required
            />
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
              required
            />
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
              required
            />
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
              required
            />
            <div className="invalid-feedback">
              Por favor, proporciona la elevación en metros.
            </div>
          </div>
        </div>
      </div>

            <div className="fp-section fp-datosColector">
          <h2 className="fp-subtitle">Datos del Colector</h2>
          <div className="row g-3 needs-validation" noValidate>
              <div className="col-md-6">
                  <label htmlFor="colector" className="form-label">
                      Selecciona el Colector:
                  </label>
                  <select
                      className="form-control"
                      id="colector"
                      name="colector"
                      required
                  >
                      <option value="">Selecciona un colector</option>
                      {/* Agrega opciones de colectores aquí */}
                  </select>
                  <div className="invalid-feedback">
                      Por favor, selecciona el colector.
                  </div>
              </div>
              <div className="col-md-6">
                  <p>No encuentras al colector? Regístralo:</p>
                  <Link to="/FormularioR" 
                      type="button" 
                      className="fp-btn-secondary">
                      
                  
                      Registrar Colector
                      </Link>
              </div>
              <div className="col-md-12">
                  <label htmlFor="fecha" className="form-label">
                      Fecha de Colecta:
                  </label>
                  <input
                      type="date"
                      className="form-control"
                      id="fecha"
                      name="fecha"
                      required
                  />
                  <div className="invalid-feedback">
                      Por favor, proporciona la fecha de colecta.
                  </div>
              </div>
          </div>
      </div>



      <button type="submit" className="fp-btn-primary">
        Enviar
      </button>
    </div>
  );
};

export default FormularioPlantas;
