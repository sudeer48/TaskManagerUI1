import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DetailsComponent } from '../details/details.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { LoginComponent } from '../login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    //AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
