import React from 'react';
import Navbar from "./Components/Navbar";
import FormularioPlantas from './Screens/FormularioPlantas';
import Home from './Screens/Home';
import Plant from './Screens/Plant'; 
import FormularioR from './Screens/FormularioR';
import Login from './Login'
import FormularioU from './Screens/FormularioU';
import { BrowserRouter as Router,Routes,Route,Navigate   } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/Login" />;
};

const App = () => {

  return (
    <AuthProvider>
      <Router>
      
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path='/Home' element={<PrivateRoute element={<><Navbar /><Home /></>} />} />
          <Route path='/FormularioPlantas' element={<PrivateRoute element={<><Navbar /><FormularioPlantas /></>} />} />
          <Route path='/FormularioU/:id' element={<PrivateRoute element={<><Navbar /><FormularioU /></>} />} />
          <Route path='/Plant/:id' element={<PrivateRoute element={<><Navbar /><Plant /></>} />} />
          <Route path='/FormularioR' element={<PrivateRoute element={<><Navbar /><FormularioR /></>} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
