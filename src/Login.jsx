import React, { useEffect, useRef } from 'react';
import './style.css';

const Login = () => {
    const containerRef = useRef(null);
    const registerBtnRef = useRef(null);
    const loginBtnRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const registerBtn = registerBtnRef.current;
        const loginBtn = loginBtnRef.current;

        if (registerBtn && loginBtn && container) {
            registerBtn.addEventListener('click', () => {
                container.classList.add('active');
            });

            loginBtn.addEventListener('click', () => {
                container.classList.remove('active');
            });

            return () => {
                registerBtn.removeEventListener('click', () => {
                    container.classList.add('active');
                });

                loginBtn.removeEventListener('click', () => {
                    container.classList.remove('active');
                });
            };
        }
    }, []);

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            alert('Usuario registrado exitosamente');
        } else {
            alert('Error al registrar el usuariolll');
        }
    };

    return (
        <div className="container" ref={containerRef}>
            <div className="form-container sign-up">
                <form onSubmit={handleRegister}>
                    <h1>Crear Cuenta</h1>
                    <span>Usa tu E-mail para registrarte</span>
                    <input type="text" placeholder="Nombre" name="name" />
                    <input type="email" placeholder="Email" name="email" />
                    <input type="password" placeholder="Contraseña" name="password" />
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
