// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const plants = [
    {
        id: 1,
        scientific_name: 'Quercus robur',
        common_name: 'Roble común',
        family: 'Fagaceae',
        genus: 'Quercus',
        species: 'robur',
        description: 'Árbol caducifolio que puede alcanzar los 40 metros de altura.',
        habitat: 'Bosques templados de Europa.',
        location: 'Sector A, Estante 1'
    },
    {
        id: 2,
        scientific_name: 'Pinus sylvestris',
        common_name: 'Pino silvestre',
        family: 'Pinaceae',
        genus: 'Pinus',
        species: 'sylvestris',
        description: 'Árbol perennifolio que puede alcanzar los 35 metros de altura.',
        habitat: 'Bosques boreales de Eurasia.',
        location: 'Sector A, Estante 2'
    },
    {
        id: 3,
        scientific_name: 'Acer pseudoplatanus',
        common_name: 'Arce sicómoro',
        family: 'Sapindaceae',
        genus: 'Acer',
        species: 'pseudoplatanus',
        description: 'Árbol caducifolio de hasta 30 metros de altura.',
        habitat: 'Bosques templados de Europa y Asia.',
        location: 'Sector B, Estante 1'
    },
    {
        id: 4,
        scientific_name: 'Betula pendula',
        common_name: 'Abedul péndulo',
        family: 'Betulaceae',
        genus: 'Betula',
        species: 'pendula',
        description: 'Árbol caducifolio que puede alcanzar los 25 metros de altura.',
        habitat: 'Bosques templados de Eurasia.',
        location: 'Sector B, Estante 2'
    },
    {
        id: 5,
        scientific_name: 'Salix alba',
        common_name: 'Sauce blanco',
        family: 'Salicaceae',
        genus: 'Salix',
        species: 'alba',
        description: 'Árbol caducifolio que puede alcanzar los 20 metros de altura.',
        habitat: 'Riberas de ríos en Europa y Asia.',
        location: 'Sector C, Estante 1'
    },
    {
        id: 6,
        scientific_name: 'Fraxinus excelsior',
        common_name: 'Fresno común',
        family: 'Oleaceae',
        genus: 'Fraxinus',
        species: 'excelsior',
        description: 'Árbol caducifolio que puede alcanzar los 40 metros de altura.',
        habitat: 'Bosques templados de Europa.',
        location: 'Sector C, Estante 2'
    },
    {
        id: 7,
        scientific_name: 'Tilia cordata',
        common_name: 'Tilo de hoja pequeña',
        family: 'Malvaceae',
        genus: 'Tilia',
        species: 'cordata',
        description: 'Árbol caducifolio que puede alcanzar los 30 metros de altura.',
        habitat: 'Bosques templados de Europa.',
        location: 'Sector D, Estante 1'
    },
    {
        id: 8,
        scientific_name: 'Ulmus glabra',
        common_name: 'Olmo de montaña',
        family: 'Ulmaceae',
        genus: 'Ulmus',
        species: 'glabra',
        description: 'Árbol caducifolio que puede alcanzar los 35 metros de altura.',
        habitat: 'Bosques templados de Europa y Asia.',
        location: 'Sector D, Estante 2'
    }
];

// Obtener todas las plantas
app.get('/plants', (req, res) => {
    res.json(plants);
});

// Obtener una planta por ID
app.get('/plants/:id', (req, res) => {
    const plant = plants.find(p => p.id === parseInt(req.params.id));
    if (!plant) return res.status(404).send('La planta no fue encontrada.');
    res.json(plant);
});

// Agregar una nueva planta
app.post('/plants', (req, res) => {
    if (!req.body.scientific_name) {
        return res.status(400).send('El nombre científico es requerido.');
    }
    const new_id = plants.length > 0 ? plants[plants.length - 1].id + 1 : 1;
    const plant = {
        id: new_id,
        scientific_name: req.body.scientific_name,
        common_name: req.body.common_name || '',
        family: req.body.family || '',
        genus: req.body.genus || '',
        species: req.body.species || '',
        description: req.body.description || '',
        habitat: req.body.habitat || '',
        location: req.body.location || ''
    };
    plants.push(plant);
    res.status(201).json(plant);
});

// Actualizar una planta existente
app.put('/plants/:id', (req, res) => {
    const plant = plants.find(p => p.id === parseInt(req.params.id));
    if (!plant) return res.status(404).send('La planta no fue encontrada.');

    if (!req.body.scientific_name) {
        return res.status(400).send('El nombre científico es requerido.');
    }

    plant.scientific_name = req.body.scientific_name || plant.scientific_name;
    plant.common_name = req.body.common_name || plant.common_name;
    plant.family = req.body.family || plant.family;
    plant.genus = req.body.genus || plant.genus;
    plant.species = req.body.species || plant.species;
    plant.description = req.body.description || plant.description;
    plant.habitat = req.body.habitat || plant.habitat;
    plant.location = req.body.location || plant.location;

    res.json(plant);
});

// Eliminar una planta
app.delete('/plants/:id', (req, res) => {
    const plantIndex = plants.findIndex(p => p.id === parseInt(req.params.id));
    if (plantIndex === -1) return res.status(404).send('La planta no fue encontrada.');

    plants.splice(plantIndex, 1);
    res.status(204).send();
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}...`);
});


// ApiPlantas.js

// Función para crear una tarjeta de planta
function createPlantCard(plant) {
    return `
    <div class="col-md-4 mb-4">
        <div class="card plant-card">
            <img src="plant.jpg" class="card-img-top" alt="Imagen de la planta">
            <div class="card-body">
                <h5 class="card-title" id="plant-name">${plant.scientific_name}</h5>
                <p class="card-text" id="plant-common-name">${plant.common_name}</p>
                <p class="card-text" id="plant-family">${plant.family}</p>
                <p class="card-text" id="plant-genus">${plant.genus}</p>
                <p class="card-text" id="plant-species">${plant.species}</p>
                <p class="card-text" id="plant-description">${plant.description}</p>
                <p class="card-text" id="plant-habitat">${plant.habitat}</p>
                <p class="card-text" id="plant-location">${plant.location}</p>
            </div>
        </div>
    </div>`;
}

// Función para cargar las plantas desde la API
function loadPlants() {
    fetch('/plants')
        .then(response => response.json())
        .then(data => {
            const plantContainer = document.getElementById('plant-container');
            plantContainer.innerHTML = ''; // Limpiar el contenedor
            data.forEach(plant => {
                plantContainer.innerHTML += createPlantCard(plant);
            });
        })
        .catch(error => console.error('Error al cargar las plantas:', error));
}

// Llamar a la función para cargar las plantas cuando se cargue la página
document.addEventListener('DOMContentLoaded', loadPlants);
