import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

export interface AuthResponse {
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'https://montroe-blog-cms-be.onrender.com';

  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/auth/login`, {
      email,
      password,
    });
  }

  me(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.apiUrl}/auth/me`, {
      withCredentials: true,
    });
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/auth/logout`, {});
  }

  getCsrfToken(): Observable<string> {
    return this.http.get(`${this.apiUrl}/auth/csrf`, {
      responseType: 'text',
      withCredentials: true,
    });
  }
}
