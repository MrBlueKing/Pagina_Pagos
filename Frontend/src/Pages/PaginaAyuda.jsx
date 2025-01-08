import React from 'react';

const PaginaAyuda = () => {
  return (
    <div className="min-h-screen mx-auto py-8 px-4 mt-14">
      <h1 className="text-3xl font-bold text-blue-900">Centro de Ayuda</h1>
      <p className="mt-4 text-gray-700">
        Aquí encontrarás respuestas a las preguntas más frecuentes y podrás ponerte en contacto con nosotros si necesitas ayuda adicional.
      </p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-blue-800">Preguntas Frecuentes</h2>
        <div className="mt-4 space-y-4">
          <details className="bg-gray-100 p-4 rounded-md shadow-sm">
            <summary className="font-medium text-blue-700 cursor-pointer">
              ¿Cómo puedo realizar un pago?
            </summary>
            <p className="mt-2 text-gray-600">
              Puedes realizar un pago seleccionando la opción "Realizar un Pago" en nuestra página principal y eligiendo tu método de pago preferido.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded-md shadow-sm">
            <summary className="font-medium text-blue-700 cursor-pointer">
              ¿Qué métodos de pago aceptan?
            </summary>
            <p className="mt-2 text-gray-600">
              Aceptamos pagos mediante Mercado Pago, PayPal y transferencia bancaria.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded-md shadow-sm">
            <summary className="font-medium text-blue-700 cursor-pointer">
              ¿Cómo puedo contactar con soporte?
            </summary>
            <p className="mt-2 text-gray-600">
              Puedes escribirnos a través de la página de contacto o enviarnos un correo a soporte@serviciointernet.com.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default PaginaAyuda;
