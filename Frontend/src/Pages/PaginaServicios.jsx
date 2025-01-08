import React from "react";
import { Link } from "react-router-dom";

const planes = [
  { nombre: "Plan Básico", precio: 10, link: "/pago" },
  { nombre: "Plan Premium", precio: 20, link: "/pago" },
];

const PaginaServicios = () => {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-blue-900">Elige tu Plan</h1>
      <div className="mt-6 space-y-4">
        {planes.map(({ nombre, precio, link }) => (
          <div key={nombre} className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">{nombre}</h2>
            <p className="mt-2">Precio: ${precio} mensuales</p>
            <Link
              to={link}
              className="mt-4 inline-block bg-blue-900 text-white py-2 px-4 rounded-md"
            >
              Pagar Ahora
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaServicios;
