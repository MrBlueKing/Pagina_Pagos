import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import PaginaAyuda from './Pages/PaginaAyuda';
import PaginaContacto from './Pages/PaginaContacto';
import PaginaDePagos from './Pages/PaginaPagos';
import Servicios from './Pages/PaginaServicios';
import PaginaEstadoCuenta from './Pages/PaginaEstadoCuenta';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} /> 
          <Route path="/pago" element={<PaginaDePagos />} /> 
          <Route path="/ayuda" element={<PaginaAyuda />} />
          <Route path="/contacto" element={<PaginaContacto />} /> 
          <Route path="/servicios" element={<Servicios />} /> 
          <Route path="/estado" element={<PaginaEstadoCuenta />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
