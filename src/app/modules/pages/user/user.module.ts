import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { VacationsListComponent } from './vacations-list/vacations-list.component';
import { VacationReplacmentComponent } from './vacation-replacment/vacation-replacment.component';

const routes: Routes = [
    {
      path: '',
      component: UserDashboardComponent
    },
    {
      path: 'vacations-list',
      component: VacationsListComponent
    },
    {
      path: 'vacation-replacment',
      component: VacationsListComponent
    },
];

@NgModule({
  declarations: [
    UserDashboardComponent,
    VacationsListComponent,
    VacationReplacmentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule] 
  
})
export class UserModule { }
