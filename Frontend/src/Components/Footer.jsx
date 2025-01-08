import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Servicio Internet. Todos los derechos reservados.</p>
        <div className="mt-2">
          <a href="#" className="text-blue-400 hover:underline mx-2">Facebook</a>
          <a href="#" className="text-blue-400 hover:underline mx-2">Twitter</a>
          <a href="#" className="text-blue-400 hover:underline mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
