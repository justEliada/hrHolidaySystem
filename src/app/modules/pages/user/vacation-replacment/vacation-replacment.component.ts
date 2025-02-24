import { Component } from '@angular/core';
import { VacationResponse } from 'src/app/core/models/VacationResponse.model';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { VacationRequestService } from 'src/app/modules/services/vacation-request.service';

@Component({
  selector: 'app-vacation-replacment',
  templateUrl: './vacation-replacment.component.html',
  styleUrls: ['./vacation-replacment.component.scss']
})
export class VacationReplacmentComponent {
  replacementRequests: any[] = [];
  approvalHistory: any[] = [];
  replacementResponse: VacationResponse[] = []; 

  constructor(
    private vacationRequestService: VacationRequestService,
    private authService: AuthServiceService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.loadReplacementRequests();
    this.loadAllRequestsForReplacementUser();

  }

  loadReplacementRequests(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.id) {
      this.vacationRequestService.getReplacementRequests(currentUser.id).subscribe({
        next: (requests: any[]) => {
          this.replacementRequests = requests;
          console.log('replacementRequests', this.replacementRequests);
        },
        error: (error: any) => {
          this.toastService.show(`${error.error || 'Error fetching replacement requests'}`, 'error');
        }
      });
    }
  }

  //TO DO
  loadAllRequestsForReplacementUser(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.id) {
      this.vacationRequestService.getAllRequestsForReplacementUser(currentUser.id).subscribe({
        next: (responses: VacationResponse[]) => {
          this.replacementResponse = responses;
          console.log('replacementResponse', this.replacementResponse);
        },
        error: (error: any) => {
          this.toastService.show(`${error.error || 'Error fetching all replacement requests'}`, 'error');
        }
      });
    }
  }
  
  

  approveRequest(requestId: number): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.id) {
      this.vacationRequestService.approveReplacementUser(requestId, currentUser.id).subscribe({
        next: () => {
          this.toastService.show('Request approved successfully', 'success');
          this.loadReplacementRequests();
          this.loadAllRequestsForReplacementUser();
        },
        error: (error: any) => {
          this.toastService.show(`${error.error || 'Error approving request'}`, 'error');
        }
      });
    }
  }

  rejectRequest(requestId: number): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.id) {
      this.vacationRequestService.rejectReplacementUser(requestId, currentUser.id).subscribe({
        next: () => {
          this.toastService.show('Request rejected successfully', 'success');
          this.loadReplacementRequests();
          this.loadAllRequestsForReplacementUser();
        },
        error: (error: any) => {
          this.toastService.show(`${error.error || 'Error rejecting request'}`, 'error');
        }
      });
    }
  }
}


