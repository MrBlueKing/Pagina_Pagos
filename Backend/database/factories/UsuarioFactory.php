<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usuario>
 */

 // Función para generar el RUT aleatorio
function generarRut() {
    // Generar un número de 7 a 8 dígitos
    $numero = rand(1000000, 99999999);
    
    // Calcular el dígito verificador
    $suma = 0;
    $multiplicador = 2;
    foreach (array_reverse(str_split($numero)) as $digito) {
        $suma += $digito * $multiplicador;
        $multiplicador = $multiplicador == 7 ? 2 : $multiplicador + 1;
    }

    $resto = $suma % 11;
    $dv = 11 - $resto;
    $digitoVerificador = ($dv == 11) ? '0' : (($dv == 10) ? 'K' : (string)$dv);
    
    // Formatear y devolver el RUT
    return number_format($numero, 0, '', '.') . '-' . $digitoVerificador;
}

class UsuarioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'rut' => generarRut(),  // Generamos el RUT aleatorio
            'nombre' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'contraseña' => bcrypt('123456'),  // Contraseña predeterminada para todos los usuarios
            'estado_pago' => $this->faker->randomElement(['pendiente', 'pagado', 'vencido']),
            'fecha_vencimiento' => $this->faker->date(),
            'plan' => $this->faker->randomElement(['basico', 'premium']),
            'telefono' => $this->faker->phoneNumber(),
            'direccion' => $this->faker->address(),
            'fecha_ultimo_pago' => $this->faker->date(),
            'monto_pago' => $this->faker->randomFloat(2, 5, 100),
        ];
    }
}
