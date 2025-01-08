import React, { useState } from 'react';

const PaginaEstadoCuenta = () => {
    const [rut, setRut] = useState(''); // Estado para guardar el RUT ingresado
    const [estado, setEstado] = useState(null); // Estado para guardar la respuesta de la API
    const [error, setError] = useState(null); // Estado para gestionar errores

    // Función para hacer la solicitud a la API
    const obtenerEstadoCuenta = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/estado-cuenta/${rut}`);
            const data = await response.json();

            if (response.ok) {
                setEstado(data); // Si la respuesta es exitosa, guardamos los datos
                setError(null); // Limpiamos el error en caso de éxito
            } else {
                setEstado(null); // Limpiamos el estado
                setError(data.error || 'Algo salió mal'); // Mostramos el mensaje de error
            }
        } catch (err) {
            setError('Error de conexión'); // Si ocurre algún error en la solicitud
        }
    };

    // Función para capitalizar la primera palabra
    const capitalizeFirstWord = (text) => {
        if (!text) return ''; // Manejar caso de texto vacío o nulo
        const words = text.split(' '); // Dividir el texto en palabras
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1); // Capitalizar la primera palabra
        return words.join(' '); // Reunir las palabras
    };

    // Función para obtener el color según el estado de pago
    const getEstadoColor = (estadoPago) => {
        switch (estadoPago.toLowerCase()) {
            case 'pagado':
                return 'text-green-600';
            case 'pendiente':
                return 'text-yellow-500';
            case 'vencido':
                return 'text-red-600';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Ver Estado de Cuenta
                </h2>

                <div className="mb-4">
                    <label htmlFor="rut" className="block text-sm font-medium text-gray-600">
                        Ingresa tu RUT
                    </label>
                    <input
                        type="text"
                        id="rut"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej: 12345678-9"
                        value={rut}
                        onChange={(e) => setRut(e.target.value)}
                    />
                </div>

                <button
                    onClick={obtenerEstadoCuenta}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
                >
                    Consultar Estado
                </button>

                {error && (
                    <div className="mt-4 text-sm text-red-500 bg-red-100 p-3 rounded-lg">
                        {error}
                    </div>
                )}

                {estado && (
                    <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                        <p className="text-lg font-semibold text-gray-800">
                            <strong>Estado:{' '}</strong>
                            <span className={`${getEstadoColor(estado.estado_pago)}`}>
                                {capitalizeFirstWord(estado.estado_pago)}
                            </span>
                        </p>
                        <p className="text-lg font-semibold text-gray-800 mt-2">
                            <strong>Nombre:</strong> {capitalizeFirstWord(estado.nombre)}
                        </p>
                        <p className="text-lg font-semibold text-gray-800 mt-2">
                            <strong>RUT:</strong> {estado.rut}
                        </p>
                        <p className="text-lg font-semibold text-gray-800 mt-2">
                            <strong>Plan:</strong> {capitalizeFirstWord(estado.plan)}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PaginaEstadoCuenta;
