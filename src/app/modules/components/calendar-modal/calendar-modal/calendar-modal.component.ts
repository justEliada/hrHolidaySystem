import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.scss']
})
export class CalendarModalComponent {
  @Input() show: boolean = false;
  @Output() showChange = new EventEmitter<boolean>();

  close() {
    this.show = false;
    this.showChange.emit(this.show);
  }
}
