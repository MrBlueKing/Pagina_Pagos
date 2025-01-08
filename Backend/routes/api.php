<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsuarioController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Ruta para consultar el estado de cuenta de un usuario usando su RUT
Route::get('/estado-cuenta/{rut}', [UsuarioController::class, 'estadoCuenta']);
