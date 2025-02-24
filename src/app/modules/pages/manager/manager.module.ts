import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user/edit-user.component';
import { MatBadgeModule } from '@angular/material/badge';


const routes: Routes = [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'edit-user/:id',
      component: EditUserComponent
    },
];

@NgModule({
  declarations: [
    DashboardComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatBadgeModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule] 
  
})
export class ManagerModule { }

