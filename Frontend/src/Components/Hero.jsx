import React from 'react';
import { CiCreditCard1 } from "react-icons/ci";
import { RiAccountPinCircleLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white mt-14 py-8 text-center md:py-16">
      <div className="container mx-auto px-4 max-w-xl">{/* Reduce el padding horizontal */}
        <h2 className="text-2xl font-bold text-blue-900 md:text-4xl">
          Paga tu servicio de internet fácilmente
        </h2>
        <p className="mt-4 text-gray-700 md:text-lg">
          Accede a métodos de pago seguros y mantén tu conexión activa.
        </p>
        <div className="mt-6 flex justify-center"> {/* Centrar el botón */}
            <a
                href="/pago" // Aquí usas el enrutador de react-router-dom si prefieres no recargar la página
                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transform transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center space-x-2"
            >
                <CiCreditCard1 className="mr-2 text-2xl" /> {/* Icono más pequeño */}
                <span className="text-sm font-semibold">Realizar un pago</span> {/* Texto más pequeño */}
            </a>
        </div>
        <div className="mt-6 flex justify-center"> {/* Centrar el botón */}
            <a
                href="/estado" // Aquí usas el enrutador de react-router-dom si prefieres no recargar la página
                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transform transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center space-x-2"
            >
                <RiAccountPinCircleLine className="mr-2 text-2xl" /> {/* Icono más pequeño */}
                <span className="text-sm font-semibold">Consultar Estado Cuenta</span> {/* Texto más pequeño */}
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
