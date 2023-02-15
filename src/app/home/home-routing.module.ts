import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from './popup/popup.component';
import { HomeComponent } from './home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';


const routes: Routes = [
{ path: '', component: HomeComponent, children: [
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'studentdetails', component: StudentDetailsComponent
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
