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
app.use(express.json());

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


