import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';


@NgModule({
  declarations: [
    MainComponent,
    //DetailsComponent,
    HomeComponent,
    StudentDetailsComponent,
    StudentregistrationComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    //AppRoutingModule,
    //HttpClientModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
