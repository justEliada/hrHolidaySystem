import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VacationRequest } from 'src/app/core/models/vacationRequest.model';
import { VacationResponse } from 'src/app/core/models/VacationResponse.model';

@Injectable({
  providedIn: 'root'
})
export class VacationRequestService {
  private baseUrl = 'http://localhost:8080/auth/timesheet';
  constructor(private http: HttpClient) { }

  submitVacationRequest(vacationRequest: VacationRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, vacationRequest);
  }
  submitVacationRequestManager(vacationRequest: VacationRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/timesheet-manager-add`, vacationRequest);
  }
  getVacationRequests(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/get-least-created`);
  }

  getReplacementRequests(replacementUserId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/replacement-requests/${replacementUserId}`);
  }

  getPendingRequests(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pending-requests/${userId}`);
  }

  approveReplacementUser(timeSheetId: number, replacementUserId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/approve-replacement/${timeSheetId}/${replacementUserId}`, {});
  }

  rejectReplacementUser(timeSheetId: number, replacementUserId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/reject-replacement/${timeSheetId}/${replacementUserId}`, {});
  }

  //TO DO
  getAllTimeSheetsForReplacementUser(replacementUserId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/replacement-user/${replacementUserId}`);
  }

  getAllVacationRequestsById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/all`);
  }

  getAllVacationRequests(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getApprovedVactionsList(userID: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userID}/approved`);
  }

  approveUserRequest(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/approve/${id}`);
  }
  rejectUserRequest(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/reject/${id}`);
  }

  getAllRequestsForReplacementUser(replacementUserId: number): Observable<VacationResponse[]> {
    return this.http.get<VacationResponse[]>(`${this.baseUrl}/replacement-requests/${replacementUserId}/get-all`);
  }
  
}
