import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from "primeng/inputtext";
import { MessageModule } from 'primeng/message';
import { AuthguardServiceService } from './Services/authguard-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    InputTextModule,
    BrowserAnimationsModule,
    FormsModule,
    MessageModule,
    FontAwesomeModule
  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent]
})


export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);