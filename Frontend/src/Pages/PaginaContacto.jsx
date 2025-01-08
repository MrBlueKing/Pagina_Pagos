import React, { useState } from 'react';

const PaginaContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="min-h-screen mx-auto py-8 px-4 mt-14 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-900">Contacto</h1>
      <p className="mt-4 text-gray-700">
        Si tienes alguna duda o consulta, por favor completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
      </p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-blue-800">Formulario de Contacto</h2>
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
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="4"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-900 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </form>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-blue-800">Información de Contacto</h2>
        <p className="mt-4 text-gray-700">
          También puedes contactarnos directamente a través de los siguientes canales:
        </p>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">
            <strong>Correo electrónico:</strong> soporte@serviciointernet.com
          </li>
          <li className="text-gray-600">
            <strong>Teléfono:</strong> +56 9 1234 5678
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PaginaContacto;
