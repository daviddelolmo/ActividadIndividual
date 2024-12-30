import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext'; // Importamos el contexto para acceder al carrito
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirigir al usuario
import '../styles/checkout.css'; // Estilos específicos de Checkout

const Checkout = () => {
  // Accedemos al carrito y la función clearCart desde el contexto
  const { carrito, clearCart } = useContext(CarritoContext);
  const navigate = useNavigate(); // Inicializamos el hook de navegación

  // Función para manejar el envío del pedido
  const handleSubmit = () => {
    alert('¡Pedido realizado con éxito!');
    clearCart(); // Vaciar el carrito
    navigate('/home'); // Redirigir al inicio después de confirmar el pedido
  };

  return (
    <div className="checkout">
      <h1>Resumen del Pedido</h1>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p> // Mensaje si el carrito está vacío
      ) : (
        <ul>
          {carrito.map((book, index) => (
            <li key={index}>
              {book.title} - ${book.price}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleSubmit}>Confirmar Pedido</button>
    </div>
  );
};

export default Checkout;
