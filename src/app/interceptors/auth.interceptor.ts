import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { switchMap } from 'rxjs';

import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const requestWithCredentials = req.clone({
    withCredentials: true,
  });

  const isUnsafeMethod = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method);
  const isCsrfRequest = req.url.endsWith('/auth/csrf');

  if (!isUnsafeMethod || isCsrfRequest) {
    return next(requestWithCredentials);
  }

  return authService.getCsrfToken().pipe(
    switchMap((token) => {
      const requestWithCsrf = requestWithCredentials.clone({
        setHeaders: {
          'X-XSRF-TOKEN': token,
        },
      });

      return next(requestWithCsrf);
    }),
  );
};
