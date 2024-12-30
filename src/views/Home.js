import React, { useState } from 'react';
import '../styles/home.css'; // Estilos específicos de Home

const Home = () => {
  const [search, setSearch] = useState('');

  // Lista de libros (puedes hacer que estos provengan de un contexto o API)
  const books = [
    { id: 1, title: 'El Imperio Final', author: 'Brandon Sanderson', price: 18 },
    { id: 2, title: 'El Pozo de la Ascensión', author: 'Brandon Sanderson', price: 20 },
    { id: 3, title: 'El Héroe de las Eras', author: 'Brandon Sanderson', price: 16 },
    { id: 4, title: 'El Aliento de los Dioses', author: 'Brandon Sanderson', price: 19 },
    { id: 5, title: 'El Camino de los Reyes', author: 'Brandon Sanderson', price: 24 },
    { id: 6, title: 'Palabras Radiantes', author: 'Brandon Sanderson', price: 22 },
  ];

  // Filtrar libros por título
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <h2>Libros Disponibles</h2>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <a href={`/book/${book.id}`}>{book.title} - {book.author}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
