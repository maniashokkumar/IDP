import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { SocialconnectComponent } from './socialconnect/socialconnect.component';
import { BecomeapartnerComponent } from './contactus/becomeapartner/becomeapartner.component';
import { GethelpComponent } from './contactus/gethelp/gethelp.component';
import { TouchComponent } from './contactus/touch/touch.component';
import { PagesComponent } from './pages/pages.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoanComponent } from './pages/loan/loan.component';
import { LoancalculatorComponent } from './pages/loan/loancalculator/loancalculator.component';
import { RegisterComponent } from './signin/register/register.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { DepositComponent } from './pages/loan/deposit/deposit.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SigninComponent,
    ContactusComponent,
    FooterComponent,
    ErrorComponent,
    SocialconnectComponent,
    BecomeapartnerComponent,
    GethelpComponent,
    TouchComponent,
    PagesComponent,
    AboutusComponent,
    LoanComponent,
    LoancalculatorComponent,
    RegisterComponent,
    C1Component,
    C2Component,
    DepositComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
