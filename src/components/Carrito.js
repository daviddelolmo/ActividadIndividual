import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import '../styles/carrito.css'; // Estilos del carrito

const Carrito = () => {
  const { carrito, removeFromCart, clearCart, carritoVisible, toggleCarrito } = useContext(CarritoContext);

  const handleRemoveFromCart = (bookId) => {
    removeFromCart(bookId); // Eliminar libro del carrito
  };

  const handleClearCart = () => {
    clearCart(); // Vaciar el carrito
  };

  return (
    <>
      {/* Overlay de fondo cuando el carrito está visible */}
      {carritoVisible && <div className="carrito-overlay carrito-overlay-visible" onClick={toggleCarrito}></div>}
      
      <div className={`carrito ${carritoVisible ? 'carrito-visible' : ''}`}>
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {carrito.map((book) => (
              <li key={book.id}>
                <p>{book.title} - ${book.price}</p>
                <button onClick={() => handleRemoveFromCart(book.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        {carrito.length > 0 && <button onClick={handleClearCart}>Vaciar Carrito</button>}
      </div>
    </>
  );
};

export default Carrito;
