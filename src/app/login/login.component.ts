import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  result="";
  login(name:any){
    if(name==localStorage.getItem("username")){
      alert("Hi you are successfully loged in:  "+name);
      this.router.navigateByUrl("home");
    }
    else{
      alert("Invalid Username")
    }
  }
}
