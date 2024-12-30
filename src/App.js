import React from 'react';
import './App.css'; // Estilos específicos de la app
import GlobalRouter from './routes/GlobalRouter'; // Rutas y componentes

function App() {
  return (
    <div className="App">
      <GlobalRouter /> {/* Componente de rutas */}
    </div>
  );
}

export default App;
