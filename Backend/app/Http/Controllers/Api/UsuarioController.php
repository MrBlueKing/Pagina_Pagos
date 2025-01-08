<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    public function estadoCuenta($rut)
    {
        // Buscar el usuario por RUT
        $usuario = Usuario::where('rut', $rut)->first();

        // Verificar si el usuario existe
        if ($usuario) {
            // Retornar el estado de cuenta en formato JSON
            return response()->json([
                'estado' => 'Cuenta activa',
                'nombre' => $usuario->nombre,
                'rut' => $usuario->rut,
                'plan' => $usuario->plan,
                'estado_pago' => $usuario->estado_pago
            ]);
        }

        // Si no existe el usuario, devolver un mensaje de error
        return response()->json([
            'error' => 'Usuario no encontrado'
        ], 404);
    }
}
