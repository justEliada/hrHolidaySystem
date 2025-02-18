import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(): boolean {
    const userRole = this.authService.getCurrentUserRole()?.toUpperCase();
    if (this.authService.isAuthenticated()) {
        if (userRole === 'MANAGER') {
            this.router.navigate(['/dashboard']);
          } else if (userRole === 'USER') {
            this.router.navigate(['/user-dashboard']);
          }
          return false;
    }
    return true;
  }
}
