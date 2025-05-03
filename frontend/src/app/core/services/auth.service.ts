import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    // Replace this with real logic (e.g., check JWT, cookie, session)
    return !!localStorage.getItem('token');
  }
}