import React, { createContext, useState} from 'react';

// Creamos el contexto para el carrito
export const CarritoContext = createContext();

// Componente que provee el estado del carrito
export const CarritoProvider = ({ children }) => {
  // Intentamos cargar el carrito desde localStorage si existe
  const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const [carrito, setCarrito] = useState(storedCarrito);
  const [carritoVisible, setCarritoVisible] = useState(false);

  const addToCart = (book) => {
    setCarrito((prevCarrito) => {
      const newCarrito = [...prevCarrito, book];
      localStorage.setItem('carrito', JSON.stringify(newCarrito)); // Guardamos el carrito actualizado
      return newCarrito;
    });
  };

  const removeFromCart = (bookId) => {
    setCarrito((prevCarrito) => {
      const newCarrito = prevCarrito.filter(book => book.id !== bookId);
      localStorage.setItem('carrito', JSON.stringify(newCarrito)); // Guardamos el carrito actualizado
      return newCarrito;
    });
  };

  const clearCart = () => {
    setCarrito([]);
    localStorage.removeItem('carrito'); // Borramos el carrito del localStorage
  };

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCart, removeFromCart, clearCart, carritoVisible, toggleCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
