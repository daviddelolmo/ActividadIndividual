import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

// Hook personalizado para manejar el carrito
const useCart = () => {
  const { carrito, addToCart, removeFromCart, clearCart } = useContext(CarritoContext);

  return { carrito, addToCart, removeFromCart, clearCart };
};

export default useCart;