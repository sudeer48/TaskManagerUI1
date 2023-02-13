import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentCreateComponent } from './student-create/student-create.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';
import { LoginComponent } from './login/login.component'
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    StudentCreateComponent,
    PopUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
