import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import FormularioPlantas from './Screens/FormularioPlantas';
import Home from './Screens/Home';
import Plant from './Screens/Plant'; 
import Explorer from './Screens/Explorer';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
function App() {
  return (
      
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/Home' element={<Home />} />  // Usa JSX para los componentes
      <Route path='/Explorer' element={<Explorer />} />
      <Route path='/FormularioPlantas' element={<FormularioPlantas />} />
      <Route path='/Plant' element={<Plant />} />  
      </Routes>



    </Router>
       
    

  );
}

export default App;
