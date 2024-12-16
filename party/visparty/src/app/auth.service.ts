// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/login`, { email, password }, { headers })
      .pipe(
        tap((response: any) => {
          // Verifica que el ID del usuario esté presente antes de almacenarlo
          if (response.user && response.user.id) {
            localStorage.removeItem('userId'); // Limpia cualquier valor anterior
            localStorage.setItem('userId', response.user.id); // Guarda el ID del usuario
          } else {
            console.error('No se encontró el ID del usuario en la respuesta.');
          }
        }),
        catchError((error) => {
          console.error('Error durante el login', error);
          return throwError(error);
        })
      );
  }

  register(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/users`, user, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error during registration', error);
          return throwError(error);
        })
      );
  }

  updateUser(userId: string, userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Valida y limpia los datos antes de enviarlos
    const sanitizedUserData = {
      name: userData.name.trim(),
      email: userData.email.trim(),
    };

    return this.http.put(`${this.apiUrl}/users/${userId}`, sanitizedUserData, { headers })
      .pipe(
        tap((response) => {
          console.log('Usuario actualizado correctamente:', response);
        }),
        catchError((error) => {
          if (error.status === 422) {
            console.error('Errores de validación:', error.error.errors);
            alert('Los datos proporcionados no son válidos. Revisa los campos.');
          } else if (error.status === 500) {
            alert('Error interno del servidor. Intenta de nuevo más tarde.');
          } else {
            alert('Ocurrió un error inesperado.');
          }
          return throwError(error);
        })
      );
  }
}
 