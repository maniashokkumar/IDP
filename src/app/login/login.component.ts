import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(name:any){
    if(name==localStorage.getItem("username")){
      alert("Hi you are successfully loged in:  "+name)
    }
    else{
      alert("Invalid Username")
    }
  }
 
}
