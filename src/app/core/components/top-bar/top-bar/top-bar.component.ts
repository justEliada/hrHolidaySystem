import { Component, Output, EventEmitter, inject } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserResponseDto } from 'src/app/core/models/userResponse.model';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { UserService } from 'src/app/modules/services/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  usersList: UserResponseDto[] = [];
  filteredUsersList: UserResponseDto[] = [];
  userRole: string | undefined;

  @Output() searchEvent = new EventEmitter<string>();

  constructor(
    private authService: AuthServiceService,
    private userService: UserService 
  ) {}

  ngOnInit(): void {
    this.loadUserRole();
    this.loadUsers(); 
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (users: UserResponseDto[]) => {
        this.usersList = users;
        this.filteredUsersList = this.usersList; 
      },
      (error: any) => {
        console.error('Error loading users:', error);
      }
    );
  }

  loadUserRole(): void {
    const userData = this.authService.getCurrentUser();
    this.userRole = (userData?.role || 'MANAGER').toUpperCase();
  }

  filterResults(text: string): void {
    console.log('Emitting search text:', text); 
    this.searchEvent.emit(text);
  }
  
}
