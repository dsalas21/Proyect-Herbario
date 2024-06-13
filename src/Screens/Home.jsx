import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Styles/EstiloCard.css';
import './Styles/EstiloHome.css';
const Home = () => {
  const [plantas, setPlantas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("https://prueba3-production.up.railway.app/Plantas")
      .then((response) => {
        setPlantas(response.data);
      })
      .catch((error) => {
        console.log('Error al obtener datos:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlantas = plantas.filter(planta =>
    planta.common_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar planta..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={() => setSearchTerm('')}>Limpiar</button>
      </div>
    <div className="Contendedor">
      <div className="card-container">
        {filteredPlantas.map((planta) => (
          <div className="card" key={planta.id}>
            <img src={planta.image} className="card-img-top" alt={planta.common_name} />
            <div className="card-body">
              <h5 className="card-title">{planta.common_name}</h5>
              <p className="card-text">
                {planta.description}
              </p>
              <Link to={`/Plant/${planta.id}`} className="btn btn-primary">Ver</Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default Home;
