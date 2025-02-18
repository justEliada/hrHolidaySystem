import { Component } from '@angular/core';
import { AuthServiceService } from './core/services/auth-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hrAngularProject';
  isAuthenticated: boolean = false;
  private authSubscription: Subscription;

  constructor(private authService: AuthServiceService) {
    this.authSubscription = this.authService.authStatus$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
  

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
