import React, { useEffect, useRef } from 'react';
import './style.css'; 

const Login = () => {
    const containerRef = useRef(null);
    const registerBtnRef = useRef(null);
    const loginBtnRef = useRef(null);

    useEffect(() => {
        // Asegurarse de que las referencias están asignadas
        const container = containerRef.current;
        const registerBtn = registerBtnRef.current;
        const loginBtn = loginBtnRef.current;

        // Agregar eventos a los botones
        if (registerBtn && loginBtn && container) {
            registerBtn.addEventListener('click', () => {
                container.classList.add('active');
            });

            loginBtn.addEventListener('click', () => {
                container.classList.remove('active');
            });

            // Limpieza de event listeners cuando el componente se desmonta
            return () => {
                registerBtn.removeEventListener('click', () => {
                    container.classList.add('active');
                });

                loginBtn.removeEventListener('click', () => {
                    container.classList.remove('active');
                });
            };
        }
    }, []); // Lista de dependencias vacía para que se ejecute solo al montar el componente.

    return (
        <div className="container" ref={containerRef}>
            <div className="form-container sign-up">
                <form>
                    <h1>Crear Cuenta</h1>
                    <span>Usa tu E-mail para registrarte</span>
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Registrar</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Iniciar sesión</h1>
                    <span>Usa tu correo para iniciar sesión</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">¿Olvidaste tu contraseña?</a>
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
