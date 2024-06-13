import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './style.css';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const add = () => {
    axios.post("https://prueba3-production.up.railway.app/create", {
      name: name,
      email: email,
      password: password
    }).then(() => {
      alert("Usuario Registrado");
      window.location.reload();
    }).catch((error) => {
      console.error("Hubo un error al registrar el usuario:", error);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://prueba3-production.up.railway.app/Login', {
      email: loginEmail,
      password: loginPassword
    })
    .then(response => {
    //  alert('Inicio de sesión exitoso');
      login();
      navigate('/Home');
    })
    .catch(error => {
      alert('Error al iniciar sesión:', error);
    });
  };
  


  useEffect(() => {
    const container = containerRef.current;
    const registerBtn = registerBtnRef.current;
    const loginBtn = loginBtnRef.current;

    if (registerBtn && loginBtn && container) {
      const registerClick = () => container.classList.add('active');
      const loginClick = () => container.classList.remove('active');

      registerBtn.addEventListener('click', registerClick);
      loginBtn.addEventListener('click', loginClick);

      return () => {
        registerBtn.removeEventListener('click', registerClick);
        loginBtn.removeEventListener('click', loginClick);
      };
    }
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="form-container sign-up">
        <form onSubmit={(e) => { e.preventDefault(); add(); }}>
          <h1>Crear Cuenta</h1>
          <span>Usa tu E-mail para registrarte</span>
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Nombre"
            name="name"
            required
          />
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Contraseña"
            name="password"
            required
          />
          <button type="submit">Registrar</button>
        </form>
      </div>
      <div className="form-container sign-in">
      <form onSubmit={handleSubmit} >
          <h1>Iniciar sesión</h1>
          <span>Usa tu correo para iniciar sesión</span>
          <input 
          type="email" 
          placeholder="Email" 
          value={loginEmail}
          onChange={(event) => setLoginEmail(event.target.value)}       
          />
          
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
            />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>¡Bienvenido de nuevo!</h1>
            <p>Ingresa tu información para poder iniciar sesión correctamente</p>
            <button className="hidden" ref={loginBtnRef}>Iniciar sesión</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>¡Hola!</h1>
            <p>Regístrate con tu información para poder ingresar al sitio web</p>
            <button className="hidden" ref={registerBtnRef}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
