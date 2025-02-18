import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();
  daysInMonth: (number | null)[] = [];
  
  monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  constructor() {
    this.calculateDaysInMonth();
  }

  calculateDaysInMonth() {
    let firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    let lastDay = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    this.daysInMonth = Array(firstDay).fill(null); 
    for (let i = 1; i <= lastDay; i++) {
      this.daysInMonth.push(i);
    }
  }

  isToday(date: number) {
    return date === this.currentDate.getDate() &&
           this.currentMonth === this.currentDate.getMonth() &&
           this.currentYear === this.currentDate.getFullYear();
  }

  goToNextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.calculateDaysInMonth();
  }

  goToPreviousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.calculateDaysInMonth();
  }
}
