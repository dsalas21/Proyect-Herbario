import React from 'react'
import './Styles/EstiloPlant.css';
 
const plant = {
    scientific_name: 'Quercus robur',
    common_name: 'Roble común',
    family: 'Fagaceae',
    genus: 'Quercus',
    species: 'robur',
    description: 'Árbol caducifolio que puede alcanzar los 40 metros de altura.',
    habitat: 'Bosques templados de Europa.',
    location: 'Sector A, Estante 1',
    imageUrl: 'URL_DE_LA_IMAGEN' // Reemplaza con la URL de la imagen
  };


function Plant() {
  return (

    <div className="plant-info-container">
      <img src={plant.imageUrl} className="plant-img" alt={plant.common_name} />
      <div className="plant-details">
        <h2>{plant.common_name}</h2>
        <p><strong>Nombre Científico:</strong> {plant.scientific_name}</p>
        <p><strong>Familia:</strong> {plant.family}</p>
        <p><strong>Género:</strong> {plant.genus}</p>
        <p><strong>Especie:</strong> {plant.species}</p>
        <p><strong>Descripción:</strong> {plant.description}</p>
        <p><strong>Hábitat:</strong> {plant.habitat}</p>
        <p><strong>Ubicación:</strong> {plant.location}</p>
      </div>
    </div>
   


  )
}

export default Plant;