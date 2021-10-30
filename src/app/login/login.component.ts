import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicedemoService } from '../servicedemo.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private dbl:ServicedemoService) { }
  user_email:any;

  ngOnInit(): void {
  }     
  login(name:any,email:string){
                                                           
   let variable:string | null= localStorage.getItem(email);
  
    if(variable == null){
      alert("NO USER")
      this.router.navigateByUrl("signin")
      return;
    }
    let ob:any = JSON.parse(variable);
    console.log(ob.name);
    

    if(ob.email==email){
      alert("login")
      this.user_email=ob.email;
    }
    else{
      alert("no user")
    }

   this.dbl.abc(this.user_email)
  }
  
  
 
}
