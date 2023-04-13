import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PopupComponent } from './popup/popup.component';
import { HomeComponent } from './home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';


const routes: Routes = [
{ path: '', component: HomeComponent, children: [
  {
    path: 'main', component: PopupComponent
  },
  {
    path: 'studentdetails', component: EmployeeDetailsComponent
  },
  {
    path: 'studentregistration', component: StudentregistrationComponent
  }
]},

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
