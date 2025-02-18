import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VacationRequest } from 'src/app/core/models/vacationRequest.model';

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

  getAllVacationRequestsById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/all`);
  }

  getAllVacationRequests(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  approveUserRequest(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/approve/${id}`);
  }
  rejectUserRequest(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/reject/${id}`);
  }
}
