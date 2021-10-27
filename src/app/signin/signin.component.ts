import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  create(name:any){
    console.log(name);
    localStorage.setItem("username",name)
    alert("Registered Successful")
  }
 
}
