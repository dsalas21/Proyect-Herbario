import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import FormularioPlantas from './Screens/FormularioPlantas';
import Home from './Screens/Home';
import Plant from './Screens/Plant'; 
import Explorer from './Screens/Explorer';
import FormularioR from './Screens/FormularioR';
//import Login from './Login'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
function App() {
  return (

   // <Login/>
      
    
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/Home' element={<Home />} />  
      <Route path='/Explorer' element={<Explorer />} />
      <Route path='/FormularioPlantas' element={<FormularioPlantas />} />
      <Route path='/Plant' element={<Plant />} />  
      <Route path='/FormularioR' element={<FormularioR />} />
      </Routes>



    </Router>

    

       
    

  );
}

export default App;
