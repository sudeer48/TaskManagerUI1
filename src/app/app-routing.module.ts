import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { StudentCreateComponent } from './student-create/student-create.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'details',component:DetailsComponent},
  {path:'createstudent',component:StudentCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
