import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { Register1Component } from './login/register1/register1.component';
import { HomeComponent } from './home/home.component';
import { BankingComponent } from './home/banking/banking.component';
import { ContactusComponent } from './home/contactus/contactus.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    Register1Component,
         HomeComponent,
         BankingComponent,
         ContactusComponent,
      
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
