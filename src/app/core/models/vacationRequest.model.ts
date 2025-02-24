export interface VacationRequest {
  fromDate: Date;
  toDate: Date;
  notes: string;
  createdBy: string;
  userId: number;
  replacementUserId: number; 
}
