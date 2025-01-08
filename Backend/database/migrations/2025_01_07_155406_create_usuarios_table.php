<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();  // ID autoincremental
            $table->string('nombre');  // Nombre del usuario
            $table->string('email')->unique();  // Correo electrónico único
            $table->string('contraseña');  // Contraseña
            $table->enum('estado_pago', ['pendiente', 'pagado', 'vencido'])->default('pendiente');  // Estado del pago
            $table->date('fecha_vencimiento')->nullable();  // Fecha de vencimiento
            $table->enum('plan', ['basico', 'premium'])->default('basico');  // Plan de suscripción
            $table->string('telefono')->nullable();  // Teléfono
            $table->text('direccion')->nullable();  // Dirección
            $table->timestamp('fecha_ultimo_pago')->nullable();  // Fecha del último pago
            $table->decimal('monto_pago', 10, 2)->default(0.00);  // Monto del último pago
            $table->timestamps();  // Fechas de creación y actualización
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
