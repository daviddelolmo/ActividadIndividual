import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Para enlaces de navegación
import { CarritoContext } from '../context/CarritoContext'; // Contexto del carrito
import '../styles/header.css'; // Estilos del Header

const Header = () => {
  const { carrito, toggleCarrito } = useContext(CarritoContext); // Obtenemos el carrito y la función toggleCarrito

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/home">Relatos de Papel</Link> {/* Enlace al Home */}
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link> {/* Enlace al checkout */}
          </li>
        </ul>
      </nav>
      {/* Botón para ver el carrito */}
      <div className="carrito-icon" onClick={toggleCarrito}>
        <span>Carrito ({carrito.length})</span> {/* Mostramos la cantidad de artículos en el carrito */}
      </div>
    </header>
  );
};

export { Header };
