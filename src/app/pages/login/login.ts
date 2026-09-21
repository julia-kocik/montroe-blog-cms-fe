import {
  Component,
  signal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  readonly isLoggingIn = signal(false);

  readonly loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
      ],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(6),
      ],
    }),
    rememberMe: new FormControl(false, {
      nonNullable: true,
    }),
  });

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastService: ToastService
  ) {}

  onSubmit(): void {
    if (this.isLoggingIn()) {
      return;
    }

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();

      this.toastService.warning(
        'Uzupełnij poprawnie e-mail i hasło.'
      );

      return;
    }

    const { email, password } =
      this.loginForm.getRawValue();

    this.isLoggingIn.set(true);

    this.authService
      .login(email, password)
      .subscribe({
        next: () => {
          this.toastService.success(
            'Zalogowano pomyślnie.'
          );

          this.router.navigate([
            '/dashboard',
          ]);
        },

        error: (
          error: HttpErrorResponse
        ) => {
          this.isLoggingIn.set(false);

          console.error(
            'Login failed',
            error
          );

          if (
            error.status === 401 ||
            error.status === 403
          ) {
            this.toastService.error(
              'Nieprawidłowy e-mail lub hasło.'
            );
            return;
          }

          if (error.status === 0) {
            this.toastService.error(
              'Nie udało się połączyć z serwerem.'
            );
            return;
          }

          this.toastService.error(
            'Wystąpił błąd serwera. Spróbuj ponownie.'
          );
        },
      });
  }
}