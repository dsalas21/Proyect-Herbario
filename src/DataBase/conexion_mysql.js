const mysql = require('mysql');
const express = require('express');
const app = express();
const port=3001;
const cors= require('cors');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'HerbarioBD'
 
});

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.post("/create",(req,res)=>{
  const name=req.body.name;
  const password=req.body.password;
  const email=req.body.email;
  
  
  connection.query ( 'INSERT INTO Usuarios (name, email, password) VALUES (?, ?, ?)',[name, email, password],
  (err,result)=>{
   
      if (err) {
        console.log('Error al insertar datos:', err);
      }else{res.send('Usuario registrado exitosamente');}
      

  }

);
});

app.post("/regR",(req,res)=>{
  const name=req.body.name;
  const state=req.body.state;
  const country=req.body.country;
  const city=req.body.city;
  
  
  connection.query ( 'INSERT INTO Recolectores (name, state, country,city) VALUES (?, ?, ?,?)',[name, state, country,city],
  (err,result)=>{
   
      if (err) {
        console.log('Error al insertar datos:', err);
      }else{res.send('Recolector registrado exitosamente');}
      

  }

);
});

app.post("/regP",(req,res)=>{
  const scientific_name =req.body.scientific_name;
  const common_name=req.body.common_name;
  const family=req.body.family;
  const genus=req.body.genus;
  const species=req.body.species;
  const description=req.body.description;
  const habitat=req.body.habitat;
  const location=req.body.location;
  const image=req.body.image;
  const collection_date=req.body.collection_date;
  const recolector_id=req.body.recolector_id;
  
  
  connection.query ( 'INSERT INTO Plantas (scientific_name, common_name, family,genus,species,description,habitat,location,image,collection_date,recolector_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [scientific_name, common_name, family,genus,species,description,habitat,location,image,collection_date,recolector_id],
  (err,result)=>{
   
      if (err) {
        console.log('Error al insertar datos:', err);
      }else{res.send('Planta registrado exitosamente');}
      

  }

);
});


app.get("/Recolectores",(req,res)=>{
  
  connection.query ( 'SELECT * FROM Recolectores ',
  (err,result)=>{
   
      if (err) {
        console.log(Err);
      }else{
        res.send(result);
      }

}
);
});

app.get("/Plantas",(req,res)=>{
  
  connection.query ( 'SELECT * FROM Plantas ',
  (err,result)=>{
   
      if (err) {
        console.log(Err);
      }else{
        res.send(result);
      }

}
);
});


connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida correctamente');
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});






module.exports = connection;


