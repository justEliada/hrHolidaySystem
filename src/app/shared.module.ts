import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { TopBarComponent } from './core/components/top-bar/top-bar/top-bar.component';
import { CalendarComponent } from './modules/components/calendar/calendar/calendar.component';
import { SideBarComponent } from './core/components/side-bar/side-bar/side-bar.component';
import { ToastComponent } from './modules/components/toast/toast.component';
import { ModalComponent } from './modules/components/modal/modal.component';
import { CalendarModalComponent } from './modules/components/calendar-modal/calendar-modal/calendar-modal.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    TopBarComponent,
    SideBarComponent,
    CalendarComponent,
    ToastComponent,
    ModalComponent,
    CalendarModalComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatBadgeModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TopBarComponent,
    CalendarComponent,
    TopBarComponent,
    SideBarComponent,
    CalendarComponent,
    ToastComponent,
    ModalComponent,
    CalendarModalComponent,
  ]
})
export class SharedModule { }
