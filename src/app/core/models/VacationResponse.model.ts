export interface VacationResponse {
  id: number;
  fromDate: Date;
  toDate: Date;
  notes: string;
  createdBy: string;
  userId: number;
  replacementUserId: number; 
  replacementUserApproved: boolean; 
  status: string;
}