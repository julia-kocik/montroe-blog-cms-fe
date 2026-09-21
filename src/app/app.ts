import { Component } from '@angular/core';
import {
  Router,
  RouterOutlet,
} from '@angular/router';

import { AuthService } from './services/auth.service';
import { Toast } from './components/common/toast/toast';
import { ToastService } from './services/toast.service';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Toast,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastService: ToastService
  ) {}
  get isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout failed', error);
        this.toastService.error(
          'Nie udało się wylogować. Spróbuj ponownie.'
        );
      },
    });
  }
}