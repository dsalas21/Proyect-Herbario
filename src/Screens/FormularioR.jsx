import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Styles/EstiloFR.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
function FormularioR() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    

    const add = () => {
        axios.post("http://localhost:3001/regR", {
          name: name,
          state: state,
          country: country,
          city: city
        }).then(() => {
          alert("Recolector Registrado");
          navigate('/Home'); 
        }).catch((error) => {
          alert("Hubo un error al registrar el recolector:", error);
        });
      }



  return (


    
    <div className="fp-container-fp-DatosR">
    <h1 className="fp-title">Formulario de Registro de Recolectores</h1>


            <div className="fp-section fp-DatosR">
            
            <form onSubmit={(e) => { e.preventDefault(); add(); }}>
            <div className="row g-3 needs-validation" noValidate>
            <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                Nombre:
                </label>
                <input
                onChange={(event) => setName(event.target.value)}
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                />
                <div className="invalid-feedback">
                Proporciona el nombre del recolector.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="state" className="form-label">
                Estado/Provincia:
                </label>
                <input
                onChange={(event) => setState(event.target.value)}
                type="text"
                className="form-control"
                id="state"
                name="state"
                required
                />
                <div className="invalid-feedback">
                Proporciona el estado/provincia.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="country" className="form-label">
                País:
                </label>
                <input
                onChange={(event) => setCountry(event.target.value)}
                type="text"
                className="form-control"
                id="country"
                name="country"
                required
                />
                <div className="invalid-feedback">
                Proporciona el país.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                Ciudad:
                </label>
                <input
                onChange={(event) => setCity(event.target.value)}
                type="text"
                className="form-control"
                id="city"
                name="city"
                required
                />
                <div className="invalid-feedback">
                Proporciona la ciudad.
                </div>
            </div>
            </div>
            
            <button  type="submit" className="fp-btn-primary">
            Registrar
            </button>
          </form>
        </div>
        </div>
  )
}

export default FormularioR