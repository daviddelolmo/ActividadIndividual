import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globales
import App from './App'; // Componente principal
import { CarritoProvider } from './context/CarritoContext'; // Proveedor del carrito

// Renderizamos la aplicación dentro de StrictMode para identificar posibles problemas
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* Habilitamos StrictMode */}
    <CarritoProvider> {/* Proveedor de contexto para el carrito */}
      <App />
    </CarritoProvider>
  </React.StrictMode>
);