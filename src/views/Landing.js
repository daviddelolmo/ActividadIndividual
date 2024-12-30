import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing.css'; // Estilos específicos de Landing

const Landing = () => {
  const navigate = useNavigate();

  // Redirigir automáticamente a la página principal después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000); // Redirección después de 5 segundos

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, [navigate]);

  return (
    <div className="landing">
      <h1>Bienvenido a Relatos de Papel</h1>
      <p>Tu tienda online de libros favoritos.</p>
      <p>Redirigiendo a la página principal...</p>
    </div>
  );
};

export default Landing;
