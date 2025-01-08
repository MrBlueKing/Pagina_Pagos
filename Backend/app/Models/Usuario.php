<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    // Definimos la tabla con la que trabajamos
    protected $table = 'usuarios';

    // Definimos los campos que se pueden asignar masivamente
    protected $fillable = [
        'nombre', 'email', 'contraseña', 'estado_pago', 'fecha_vencimiento', 'plan', 'telefono', 'direccion', 'fecha_ultimo_pago', 'monto_pago'
    ];

    // Ocultamos campos sensibles como la contraseña
    protected $hidden = [
        'contraseña',
    ];

    // Si deseas usar timestamps personalizados, puedes hacerlo aquí
    public $timestamps = true;
}
