import React,{useState,useEffect,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Styles/EstiloFP.css';
import axios from 'axios';
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
  const [image, setImage] = useState("");
  const [recolector_id, setRecolector_id] = useState(0);
  const [collection_date, setCollection_date] = useState("");
 
  const [us, setUs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const URL = 'http://localhost:3001/Recolectores'; 

//Registrar planta
  const add = () => {
    axios.post("http://localhost:3001/regP", {
      scientific_name: scientific_name,
      common_name: common_name,
      family:family,
      genus:genus,
      species:species,
      description:description,
      habitat:habitat,
      location:location,
      image:image,
      collection_date:collection_date,
      recolector_id:recolector_id

    }).then(() => {
      alert("Planta Registrado");
      window.location.reload();
    }).catch((error) => {
      alert("Hubo un error al registrar el recolector:", error);
    });
  }

  //Consulta para el boton dropdown
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Sin conexion a la base de datos');
        }
        return response.json();
      })
      .then((data) => {
        setUs(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los recolectores:', error);
        setError(error);
        setIsLoading(false);
      });
  }, [URL]);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div className="fp-container">

      <h1 className="fp-title">Formulario de Registro de Plantas de Herbario</h1>
      <form onSubmit={(e) => { e.preventDefault(); add(); }}>
      <div className="fp-section fp-Criterios">
        <h2 className="fp-subtitle">Criterios Taxonómicos</h2>
        <div className="form-group">
          <label htmlFor="scientific_name">Nombre Científico:</label>
          <input
            onChange={(event) => setScientific_name(event.target.value)}
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
            onChange={(event) => setCommon_name(event.target.value)}
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
            onChange={(event) => setFamily(event.target.value)}
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
            onChange={(event) => setGenus(event.target.value)}
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
            onChange={(event) => setSpecies(event.target.value)}
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
            onChange={(event) => setDescription(event.target.value)}
            className="form-control"
            id="description"
            name="description"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="habitat">Hábitat:</label>
          <input
            onChange={(event) => setHabitat(event.target.value)}
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
            onChange={(event) => setLocation(event.target.value)}
            type="text"
            className="form-control"
            id="location"
            name="location"
            required
          />
        </div>

        <div>
        <label htmlFor="imageUpload">Adjuntar imagen:</label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleFileChange}
        />
        {preview && (
          <div>
            <img src={preview} alt="Vista previa" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}
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
                      onChange={(event) => setRecolector_id(event.target.value)}
                      className="form-control"
                      id="recolector_id"
                      name="recolector_id"
                      required
                  >
                  <option value="">Selecciona un colector</option>
                          {us.map((us) => (
                            <option key={us.id} value={us.id}>
                              {us.name}
                            </option>
                          ))}
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
                      onChange={(event) => setCollection_date(event.target.value)}
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
        Registar
      </button>
      </form>
                          
    </div>
    
  );
};

export default FormularioPlantas;
