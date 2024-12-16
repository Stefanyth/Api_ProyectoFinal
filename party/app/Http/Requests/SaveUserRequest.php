<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaveUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
{
    return [
        'name' => 'required|string|max:255', // Nombre es obligatorio
        'email' => 'required|string|email|max:255|unique:users,email,' . $this->route('user'), // Email único excepto para el usuario actual
        'password' => 'sometimes|nullable|string|min:8', // La contraseña es opcional
    ];
}

}
