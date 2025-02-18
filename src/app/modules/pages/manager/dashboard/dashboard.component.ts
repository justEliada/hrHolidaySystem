import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtendedUserResponseDto } from 'src/app/core/models/ExtendedUserResponseDto.model';
import { UserResponseDto } from 'src/app/core/models/userResponse.model';
import { UserService } from 'src/app/modules/services/user.service';
import { VacationRequestService } from 'src/app/modules/services/vacation-request.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements OnInit {
  isFilterApplied = false;
  users: ExtendedUserResponseDto[] = [];
  allUsers: ExtendedUserResponseDto[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private vacationRequestService: VacationRequestService, ) { }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('DashboardComponent: ngOnChanges', changes);
    if (changes['searchText'] && !changes['searchText'].firstChange) {
      this.filterUsers(changes['searchText'].currentValue);
    }
  }

  loadAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.allUsers = data.filter(user => user.id !== 1).map(user => ({
          ...user,
          hasPendingVacation: false 
        }));
        this.users = [...this.allUsers];
        this.checkForPendingVacations();
      },
      error: (e) => console.error(e)
    });
  }

  handleSearch(searchText: string): void {
    this.filterUsers(searchText);
  }

  editUser(userId: number): void {
    console.log(`Navigating to edit user with ID: ${userId}`);
    this.router.navigate(['/dashboard/edit-user', userId]).catch(err => console.error('Navigation error:', err));
  }
  
  filterUsers(text: string): void {
    if (!text) {
      this.users = [...this.allUsers];
      return;
    }
    this.users = this.allUsers.filter(user =>
      user.firstName.toLowerCase().includes(text.toLowerCase()) ||
      user.lastName.toLowerCase().includes(text.toLowerCase())
    );
  }

  toggleFilter(): void {
    if (this.isFilterApplied) {
      this.loadAllUsers();
      this.isFilterApplied = false;
    } else {
      this.userService.getUsersByLeastCreatedTimeSheet().subscribe({
        next: (filteredUsers) => {
          const usersWithPendingCheck = filteredUsers.map(user => ({
            ...user,
            hasPendingVacation: false 
          }));
          this.users = usersWithPendingCheck;
          this.checkForPendingVacations(usersWithPendingCheck);
          this.isFilterApplied = true;
        },
        error: (e) => console.error(e)
      });
    }
  }

  checkForPendingVacations(usersToCheck: ExtendedUserResponseDto[] = this.users): void {
    usersToCheck.forEach((user, index) => {
      this.vacationRequestService.getAllVacationRequestsById(user.id).subscribe({
        next: (requests) => {
          const hasPending = requests.some((request: { status: string; }) => request.status === 'PENDING');
          const userIndex = this.users.findIndex(u => u.id === user.id);
          if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], hasPendingVacation: hasPending };
          }
        },
        error: (e) => console.error('Error fetching vacation requests for user', user.id, e)
      });
    });
  }
  
  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: (response) => {
          console.log(response);
          this.users = this.users.filter(user => user.id !== id);
        },
        error: (e) => {
          console.error('Error deleting user:', e);
          alert('Failed to delete user. Please try again.');
        }
      });
    }
  }
}



