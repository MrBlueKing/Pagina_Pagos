import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaQuestionCircle, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false); // Cierra el menú al navegar

  return (
    <header className="bg-blue-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Servicio Internet</h1>

        {/* Botón de menú para móviles */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Menú de navegación */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-900 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } md:flex justify-center items-center space-x-6 md:space-x-8`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            {[
              { to: "/", label: "Inicio", icon: <FaHome className="mr-3 text-xl" /> },
              { to: "/servicios", label: "Servicios", icon: <BsFillCartPlusFill  className="mr-3 text-xl" /> },
              { to: "/ayuda", label: "Ayuda", icon: <FaQuestionCircle className="mr-3 text-xl" /> },
              { to: "/contacto", label: "Contacto", icon: <FaEnvelope className="mr-3 text-xl" /> },
            ].map(({ to, label, icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="flex items-center text-lg hover:text-yellow-300 transition duration-300 ease-in-out"
                  onClick={closeMenu} // Cierra el menú al navegar
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
