import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/EstiloPlant.css';
import { useParams, useNavigate } from 'react-router-dom';

function Plant() {
  const [plant, setPlant] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [collector, setCollector] = useState(null);
  useEffect(() => {
    axios.get(`https://prueba3-production.up.railway.app/Plantas/${id}`)
      .then((response) => {
        setPlant(response.data);
      })
      .catch((error) => {
        console.log('Error al obtener los detalles de la planta:', error);
      });
  }, [id]);

  const handleEdit = () => {
    navigate(`/FormularioU/${id}`); 
  };

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta planta?")) {
      axios.delete(`https://prueba3-production.up.railway.app/borrarPlanta/${id}`)
        .then(() => {
          alert('Planta eliminada con éxito');
          navigate('/Home'); 
        })
        .catch((error) => {
          alert('Error al eliminar la planta:', error);
        });
    } 
  };




  if (!plant) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="plant-info-container">
      <div className="plant-details">
        <h2>{plant.common_name}</h2>
        <p><strong>Nombre Científico:</strong> {plant.scientific_name}</p>
        <p><strong>Familia:</strong> {plant.family}</p>
        <p><strong>Género:</strong> {plant.genus}</p>
        <p><strong>Especie:</strong> {plant.species}</p>
        <p><strong>Descripción:</strong> {plant.description}</p>
        <p><strong>Hábitat:</strong> {plant.habitat}</p>
        <p><strong>Ubicación:</strong> {plant.location}</p>
        
        <img src={plant.image} className="plant-img" alt={plant.common_name} />
      <div className="plant-actions">
        <button onClick={handleEdit} className="edit-btn">Editar</button>
        <button onClick={handleDelete} className="delete-btn">Eliminar</button>
      </div>
    </div>
      </div>
  );
}

export default Plant;
