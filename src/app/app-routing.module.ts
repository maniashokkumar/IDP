import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankingComponent } from './home/banking/banking.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/landing/landing.component';

import { LoginComponent } from './login/login.component';
import { Register1Component } from './login/register1/register1.component';


const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    
        path:"register",
        component:Register1Component
     
   
  },
  {
    path:"login",
    component:LoginComponent
    
  },
  {
    path:"home",
    component:HomeComponent,
    children:[{
      path:"landing",
      component:LandingComponent
    },
    {
      path:"",
      component:LandingComponent
    },
    {
      path:"Banking",
      component:BankingComponent
    },
    {
      path:"contactus",
      component:ContactusComponent
    },
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
