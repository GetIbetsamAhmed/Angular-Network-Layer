import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.

    // Clone the request and add the auth token to the header.
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer authToken`)
    });

    // Pass the cloned request to the next handler.
    return next.handle(authRequest);
  }
}