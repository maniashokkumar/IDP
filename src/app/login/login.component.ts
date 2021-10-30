import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(name:any,email:string){

   let variable:string | null= localStorage.getItem(email);
  
    if(variable == null){
      alert("")
      this.router.navigateByUrl("signin")
      return;
    }
    let ob:any = JSON.parse(variable);
    console.log(ob.name);

    /*let email1: any = JSON.parse();
    console.log(email1.name);
    console.log(typeof(email1.email));
    if(email1.email==''){
      alert("Invalid")
    }
    else if(email==email1.email){
      alert("Hi you are successfully loged in:  ")
    }
   */
  }
 
}
