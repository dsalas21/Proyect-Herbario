import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './style.css';

const Login = () => {
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const add = () => {
    axios.post("http://localhost:3001/create", {
      name: name,
      email: email,
      password: password
    }).then(() => {
      alert("Usuario Registrado");
    }).catch((error) => {
      console.error("Hubo un error al registrar el usuario:", error);
    });
  }
  

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
        <form>
          <h1>Iniciar sesión</h1>
          <span>Usa tu correo para iniciar sesión</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Iniciar sesión</button>
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
