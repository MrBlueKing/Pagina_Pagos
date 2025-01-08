import React, { useState } from "react";

const PaginaPago = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    monto: 50, // Ejemplo de monto predeterminado
    metodoPago: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.metodoPago) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    // Aquí agregarías la lógica para procesar el pago
    console.log("Formulario de pago enviado:", formData);
    setError(""); // Limpiar el error si todo está bien
  };

  return (
    <div className="min-h-screen mx-auto py-8 px-4 mt-14 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-900">Realizar un Pago</h1>
      <p className="mt-4 text-gray-700">Complete el formulario para realizar su pago.</p>

      {/* Mostrar errores si los hay */}
      {error && <div className="text-red-500 mt-4">{error}</div>}

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-blue-800">Formulario de Pago</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="monto" className="block text-sm font-medium text-gray-700">
              Monto a Pagar
            </label>
            <input
              type="number"
              id="monto"
              name="monto"
              value={formData.monto}
              onChange={handleChange}
              disabled
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="metodoPago" className="block text-sm font-medium text-gray-700">
              Método de Pago
            </label>
            <select
              id="metodoPago"
              name="metodoPago"
              value={formData.metodoPago}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccionar...</option>
              <option value="mercadoPago">Mercado Pago</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-900 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Realizar Pago
          </button>
        </form>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-blue-800">Resumen de Pago</h2>
        <div className="mt-4 p-4 bg-white shadow-md rounded-md">
          <p className="text-gray-700"><strong>Nombre:</strong> {formData.nombre}</p>
          <p className="text-gray-700"><strong>Correo:</strong> {formData.email}</p>
          <p className="text-gray-700"><strong>Monto:</strong> ${formData.monto}</p>
          <p className="text-gray-700"><strong>Método de Pago:</strong> {formData.metodoPago || 'Ninguno seleccionado'}</p>
        </div>
      </section>
    </div>
  );
};

export default PaginaPago;
