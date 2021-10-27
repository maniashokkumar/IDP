import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BecomeapartnerComponent } from './contactus/becomeapartner/becomeapartner.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GethelpComponent } from './contactus/gethelp/gethelp.component';
import { TouchComponent } from './contactus/touch/touch.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DepositComponent } from './pages/loan/deposit/deposit.component';
import { LoanComponent } from './pages/loan/loan.component';
import { LoancalculatorComponent } from './pages/loan/loancalculator/loancalculator.component';
import { PagesComponent } from './pages/pages.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:"landing",
    component:LandingComponent,

  },
  {
    path:"login",
    component:LoginComponent,
    
  },
  {
    path:'',
    component:LandingComponent,
    
  },
  {
    path:'signin',
    component:SigninComponent,
   
  },
  {
    path:"contactus",
    component:ContactusComponent
  },
  {
    path:'contactus',
    children:[
      {
        path:"partner",
        component:BecomeapartnerComponent
      },
      {
        path:"gethelp",
        component:GethelpComponent
      },{
        path:"touch",
        component:TouchComponent
      }
    ]
   
  },
  {
    path:"Banking",
    component:PagesComponent
  },
  {
    path:"Banking",
    children:[
      {
        path:"loan",
        component:LoanComponent
      },
      
    ]
  },


  {
    path:"Banking",
    children:[
      {
        path:"loan",
        children:[
          {
            path:"loancalc",
            component:LoancalculatorComponent
          },{
            path:"deposit",
            component:DepositComponent
          }
          
        ]
      
      },
      
    ]
  },











  {
    path:"aboutus",
    component:AboutusComponent
  },

  {
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





