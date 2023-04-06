import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {TableModule } from 'primeng/table'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PasswordModule } from 'primeng/password';
//import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    PopupComponent,
    HomeComponent,
    StudentDetailsComponent,
    StudentregistrationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    PdfViewerModule,
    ButtonModule,
    DialogModule,
    TableModule,
    FontAwesomeModule,
    PasswordModule
  ],
  providers: [StudentregistrationComponent],
})
export class HomeModule { }
