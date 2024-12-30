import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing'; // Vista de acceso
import Home from '../views/Home'; // Vista principal
import BookDetail from '../views/BookDetail'; // Vista de detalle de libro
import Checkout from '../views/Checkout'; // Vista de checkout
import NotFound from '../views/NotFound'; // Vista para página no encontrada
import { Header } from '../components/Header'; // Header común
import Carrito from '../components/Carrito'; // Componente del carrito
import { CarritoProvider } from '../context/CarritoContext'; // Proveedor de contexto
import { Footer } from '../components/Footer'; // Footer común

function GlobalRouter() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Routes>
          {/* Ruta de acceso (Landing Page) */}
          <Route path="/" element={<Layout><Landing /></Layout>} />
          
          {/* Ruta principal (Home Page) */}
          <Route path="/home" element={<Layout><Home /></Layout>} />
          
          {/* Ruta de detalle de libro */}
          <Route path="/book/:id" element={<Layout><BookDetail /></Layout>} />
          
          {/* Ruta de checkout */}
          <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
          
          {/* Ruta de página no encontrada (404) */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}

// Layout común con Header, Footer y Carrito
const Layout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
      <Carrito />
      <Footer /> {/* Footer común */}
    </>
  );
};


export default GlobalRouter;
