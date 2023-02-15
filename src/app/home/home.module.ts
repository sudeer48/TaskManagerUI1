import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './popup/popup.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {TableModule } from 'primeng/table'; 

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
    HomeRoutingModule,
    PdfViewerModule,
    ButtonModule,
    DialogModule,
    TableModule,
  ]
})
export class HomeModule { }
