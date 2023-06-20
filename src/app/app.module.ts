import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from "primeng/inputtext";
import { MessageModule } from 'primeng/message';
import { AuthguardServiceService } from './Services/authguard-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { JwtinterceptorInterceptor } from './helpers/jwtinterceptor.interceptor';
import { Password, PasswordModule } from 'primeng/password';
import { MaincontentComponent } from './home/maincontent/maincontent.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    MaincontentComponent
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
    DialogModule,
    ButtonModule,
    FontAwesomeModule,
    PasswordModule
  ],
  providers: [AuthguardServiceService,{provide:HTTP_INTERCEPTORS,useClass:JwtinterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})


export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);