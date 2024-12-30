import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext'; // Importamos el contexto del carrito
import '../styles/bookDetail.css'; // Estilos específicos de BookDetail

const BookDetail = () => {
  const { id } = useParams(); // Obtener el ID del libro de la URL
  const [book, setBook] = useState(null);
  const { addToCart } = useContext(CarritoContext); // Usamos el contexto para acceder a la función de añadir al carrito

  useEffect(() => {
    // Datos simulados de libros
    const bookData = {
      1: { id: 1, title: 'El Imperio Final', author: 'Brandon Sanderson', price: 18 },
      2: { id: 2, title: 'El Pozo de la Ascensión', author: 'Brandon Sanderson', price: 20 },
      3: { id: 3, title: 'El Héroe de las Eras', author: 'Brandon Sanderson', price: 16 },
      4: { id: 4, title: 'El Aliento de los Dioses', author: 'Brandon Sanderson', price: 19 },
      5: { id: 5, title: 'El Camino de los Reyes', author: 'Brandon Sanderson', price: 24 },
      6: { id: 6, title: 'Palabras Radiantes', author: 'Brandon Sanderson', price: 22 },
    };

    setBook(bookData[id]); // Establecer los datos del libro en el estado
  }, [id]);

  if (!book) return <div>Loading...</div>; // Cargar mientras se obtiene el libro

  const handleAddToCart = () => {
    addToCart(book); // Llamamos a la función para añadir el libro al carrito
  };

  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <p>Autor: {book.author}</p>
      <p>Precio: ${book.price}</p>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default BookDetail;
