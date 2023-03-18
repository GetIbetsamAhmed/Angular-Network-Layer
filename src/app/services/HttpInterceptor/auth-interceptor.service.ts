import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.

    // Clone the request and add the auth token to the header.
    const authRequest = request.clone({
      headers: request.headers.set(
        'authorization',
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcsImVtYWlsIjoiYWhtZWQxMzNpYnRlc2FtQGdtYWlsLmNvbSIsIm1vYmlsZSI6Iis5MjMzMzkxMDc3MDQiLCJleHAiOjE2ODIwNzA1MTYsImlhdCI6MTY3Njg5MDExNn0.D_iTbMLLtoadkMUXwcfFMIil0fslMx3fjORwGHd6YEs`
      )
    });


    // Pass the cloned request to the next handler.
    return next.handle(authRequest);
  }
}