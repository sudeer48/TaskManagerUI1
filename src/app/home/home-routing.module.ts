import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { LoginComponent } from '../login/login.component';
import { StudentCreateComponent } from '../student-create/student-create.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
{path:'',component:LoginComponent},
//{path:'*',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'details',component:DetailsComponent},
{path:'createstudent',component:StudentCreateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
