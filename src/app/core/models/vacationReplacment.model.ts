export class vacationReplacment {
    id!: number;
    name!: string;
    firstName!: string;
    lastName!: string;
    role!: 'User' | 'Manager';
    password!: string; 
    vacationStatus!: 'Approved' | 'Pending' | 'Rejected';
    position!: string;
    fromDate!: Date;
    toDate!: Date;
  }